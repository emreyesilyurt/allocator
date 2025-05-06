
import { hash } from 'bcryptjs';
import { Pool } from 'pg';
import cookie from 'cookie';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: 'All fields are required' });

  try {
    const client = await pool.connect();
    const existingUser = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existingUser.rows.length > 0) {
      client.release();
      return res.status(409).json({ message: 'User already exists' });
    }
    const passwordHash = await hash(password, 10);
    await client.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [username, email, passwordHash]);
    client.release();
    res.setHeader('Set-Cookie', cookie.serialize('loggedIn', 'true', { path: '/', httpOnly: true }));
    return res.status(201).json({ message: 'Registered successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
