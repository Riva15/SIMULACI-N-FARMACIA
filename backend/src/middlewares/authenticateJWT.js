// placeholder for authenticateJWT.js
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/config');

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(401);

  const token = authHeader.split(' ')[1];
  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user; 
    next();
  });
}

module.exports = authenticateJWT;
