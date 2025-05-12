// import { compare } from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import cookie from 'cookie';
// const { Pool } = require('pg');

// // Connect to PostgreSQL database
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   let client;
//   try {
//     client = await pool.connect();
//     const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
//     const user = result.rows[0];

//     if (!user || !(await compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Create JWT with user data
//     const token = jwt.sign(
//       {
//         id: user.id,
//         email: user.email,
//         name: user.name,
//         wallet: user.wallet,
//         balance: user.balance,
//       },
//       process.env.JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     // Set JWT cookie
//     res.setHeader('Set-Cookie', cookie.serialize('token', token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'Lax',
//       path: '/',
//       maxAge: 60 * 60 * 24 * 7, // 7 days
//     }));

//     return res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Login error:', error);
//     return res.status(500).json({ message: 'Server error' });
//   } finally {
//     if (client) client.release();
//   }
// }

import { compare } from 'bcryptjs'; 
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
const { Pool } = require('pg');

// Connect to PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  let client;
  try {
    client = await pool.connect();
    const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (!user.password_hash) {
      console.error('Missing password_hash for user:', user.email);
      return res.status(500).json({ message: 'Server error: missing password hash' });
    }

    const passwordMatch = await compare(password, user.password_hash);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.username || '',
        wallet: user.wallet || '',
        balance: user.balance || '0.00 ETH',
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.setHeader('Set-Cookie', serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    }));
    

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  } finally {
    if (client) client.release();
  }
}
