let jwt = require("jsonwebtoken");
let jwtSecretKey = process.env.JWT_SECRET_KEY;

function generateJwtToken(payload) {
  return jwt.sign(payload, jwtSecretKey);
}

function decodeJwtToken(token) {
  return jwt.verify(token, jwtSecretKey);
}

module.exports = { generateJwtToken, decodeJwtToken }