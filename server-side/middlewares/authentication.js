const { decodeJwtToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers
    const payload = decodeJwtToken(access_token)
    const user = User.findByPk(payload.id)
    if (!user) throw { name: 'InvalidToken' }
    req.user = {
      id: user.id,
      username: user.username
    }
    next() 
  } catch (err) {
    next(err)
  }
}

module.exports = authentication