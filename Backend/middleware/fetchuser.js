// Backend/middleware/fetchuser.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'Harryisagoodb$oy';

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');

  if (!token) {
    return res.status(401).json({ error: 'No token provided. Please authenticate.' });
  }

  // Debug helper (remove in production)
  try {
    const decodedUnsafe = jwt.decode(token, { json: true });
    console.debug('fetchuser: incoming token (decoded without verify):', decodedUnsafe);
  } catch (e) {
    console.debug('fetchuser: token decode failed', e);
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // { id: ... }
    next();
  } catch (err) {
    console.error('fetchuser middleware error:', err);

    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired. Please login again.' });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token signature. Please login again.' });
    }
    return res.status(401).json({ error: 'Could not authenticate token' });
  }
};

module.exports = fetchuser;
