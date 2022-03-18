// monitoria do Gaspar 
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    // status e mensagem readme
    if (!token) return res.status(401).json({ error: 'Token not found' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tokenData = decoded.data;

    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};