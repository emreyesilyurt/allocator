
import cookie from 'cookie';

export default async function handler(req, res) {
  res.setHeader('Set-Cookie', cookie.serialize('loggedIn', '', {
    path: '/',
    httpOnly: true,
    expires: new Date(0),
  }));
  res.status(200).json({ message: 'Logged out' });
}
