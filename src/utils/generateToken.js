const jwt = require('jsonwebtoken')

const generateToken = (userId) => {
    return jwt.sign({ userId }, 'JWT_SECRET', { expiresIn: '1h' });
  };

module.exports = generateToken