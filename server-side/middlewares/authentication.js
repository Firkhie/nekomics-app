const { decodeJwtToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers
    const payload = decodeJwtToken(access_token)
    const user = await User.findByPk(payload.id)
    if (!user) throw { name: 'InvalidToken' }
    req.user = {
      userId: user.id,
      username: user.username
    }
    next() 
  } catch (err) {
    next(err)
  }
}

module.exports = authentication