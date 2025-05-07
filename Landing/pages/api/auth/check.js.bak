
// export default async function handler(req, res) {
//   const cookie = req.headers.cookie || '';
//   const isLoggedIn = cookie.includes('loggedIn=true');
//   res.status(200).json({ loggedIn: isLoggedIn });
// }

import { Pool } from 'pg';
import cookie from 'cookie';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

export default async function handler(req, res) {
  // Get the cookie from the request
  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const isLoggedIn = cookies.loggedIn === 'true';
  
  if (!isLoggedIn) {
    return res.status(200).json({ loggedIn: false });
  }
  
  // For more security, you could add a session table and validate the session ID
  // This is a simplified version for the current setup
  return res.status(200).json({ 
    loggedIn: true
  });
}