import { compare } from 'bcryptjs';
const { Pool } = require('pg');

// Create a pool with your connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Log connection attempt
console.log('Setting up login API with connection string');

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('Login API called');
  
  // Validate request body
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  let client;
  try {
    // Connect to database
    client = await pool.connect();
    console.log('Connected to database for login check');
    
    // Find user by email
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password with stored hash
    const passwordMatch = await compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Set login cookie manually without cookie module
    const maxAge = 60 * 60 * 24 * 7; // 1 week in seconds
    const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
    
    res.setHeader('Set-Cookie', 
      `loggedIn=true; Path=/; HttpOnly; ${
        process.env.NODE_ENV === 'production' ? 'Secure;' : ''
      } SameSite=Strict; Max-Age=${maxAge}; Expires=${expires}`
    );
    
    console.log('User logged in successfully:', {
      userId: user.id,
      email: user.email
    });
    
    // Return success with limited user info
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        username: user.username,
        email: user.email
      }
    });
  } catch (err) {
    console.error('Login error details:', err);
    return res.status(500).json({ 
      success: false,
      message: 'Database error: ' + err.message 
    });
  } finally {
    if (client) client.release();
  }
}