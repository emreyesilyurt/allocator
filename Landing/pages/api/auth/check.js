
export default async function handler(req, res) {
  const cookie = req.headers.cookie || '';
  const isLoggedIn = cookie.includes('loggedIn=true');
  res.status(200).json({ loggedIn: isLoggedIn });
}
