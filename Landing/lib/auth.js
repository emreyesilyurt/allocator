import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

export function verifyToken(req) {
  const cookies = parse(req.headers.cookie || '');
  const token = cookies.token;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

// Client-side helper to check if user is logged in
export async function checkUserSession() {
  try {
    const res = await fetch('/api/auth/check', { credentials: 'include' });
    const data = await res.json();
    return data;
  } catch (err) {
    return { loggedIn: false, user: null };
  }
}
