const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Obtém o token do header 'Authorization'

  if (token == null) {
    return res.status(401).json({ message: 'Token de autenticação não fornecido' });
  }

  jwt.verify(token, 'seuTokenSecreto', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Falha na autenticação do token' });
    }
    req.user = user; // Adiciona o payload decodificado do token à requisição para uso posterior, se necessário
    next(); // Chama o próximo middleware
  });
};

module.exports = verifyToken