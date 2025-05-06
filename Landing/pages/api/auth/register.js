
// import { hash } from 'bcryptjs';
// import { Pool } from 'pg';
// import cookie from 'cookie';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export default async function handler(req, res) {
//   if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

//   const { username, email, password } = req.body;
//   if (!username || !email || !password)
//     return res.status(400).json({ message: 'All fields are required' });

//   try {
//     const client = await pool.connect();
//     const existingUser = await client.query('SELECT * FROM users WHERE email = $1', [email]);
//     if (existingUser.rows.length > 0) {
//       client.release();
//       return res.status(409).json({ message: 'User already exists' });
//     }
//     const passwordHash = await hash(password, 10);
//     await client.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [username, email, passwordHash]);
//     client.release();
//     res.setHeader('Set-Cookie', cookie.serialize('loggedIn', 'true', { path: '/', httpOnly: true }));
//     return res.status(201).json({ message: 'Registered successfully' });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ message: 'Internal server error' });
//   }
// }
import { hash } from 'bcryptjs';
const { Pool } = require('pg');

// Create a pool that works with your existing database configuration
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Log connection attempt
console.log('Setting up registration API with connection string format:', 
  process.env.DATABASE_URL ? process.env.DATABASE_URL.replace(/:[^:@]+@/, ':****@') : 'No DATABASE_URL found');

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  console.log('Registration API called');
  
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  let client;
  try {
    // Get client from pool
    client = await pool.connect();
    console.log('Connected to database for registration');
    
    // Check if user exists
    const existingUser = await client.query('SELECT * FROM users WHERE email = $1 OR username = $2', [email, username]);
    if (existingUser.rows.length > 0) {
      console.log('User already exists');
      return res.status(409).json({ message: 'User already exists' });
    }
    
    // Hash password
    const passwordHash = await hash(password, 10);
    console.log('Password hashed successfully');
    
    // Insert user
    const result = await client.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id',
      [username, email, passwordHash]
    );
    
    console.log('User created with ID:', result.rows[0].id);
    
    // Set cookie without using the cookie module
    const maxAge = 60 * 60 * 24 * 7; // 1 week in seconds
    const expires = new Date(Date.now() + maxAge * 1000).toUTCString();
    
    res.setHeader('Set-Cookie', 
      `loggedIn=true; Path=/; HttpOnly; ${
        process.env.NODE_ENV === 'production' ? 'Secure;' : ''
      } SameSite=Strict; Max-Age=${maxAge}; Expires=${expires}`
    );
    
    return res.status(201).json({ 
      message: 'Registered successfully', 
      userId: result.rows[0].id 
    });
  } catch (err) {
    console.error('Registration error details:', err);
    return res.status(500).json({ message: 'Database error: ' + err.message });
  } finally {
    if (client) client.release();
  }
}