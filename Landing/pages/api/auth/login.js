
import { compare } from 'bcryptjs';
import { Pool } from 'pg';
import cookie from 'cookie';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

  try {
    const client = await pool.connect();
    const user = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    client.release();

    if (user.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const validPassword = await compare(password, user.rows[0].password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.setHeader('Set-Cookie', cookie.serialize('loggedIn', 'true', {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    }));

    return res.status(200).json({ message: 'Login successful' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
