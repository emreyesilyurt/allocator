import jwt from 'jsonwebtoken';
import { parse } from 'cookie';

export default async function handler(req, res) {
  try {
    const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
    const token = cookies.token;
    
    console.log('Auth check - token exists:', !!token);

    if (!token) {
      return res.status(200).json({ loggedIn: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Auth check - decoded user:', decoded);

    return res.status(200).json({
      loggedIn: true,
      user: {
        id: decoded.id,
        name: decoded.name,
        email: decoded.email,
        wallet: decoded.wallet,
        balance: decoded.balance,
      }
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return res.status(200).json({ loggedIn: false });
  }
}
