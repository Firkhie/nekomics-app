let bcrypt = require("bcryptjs");

function hashPass(password) {
  let salt = bcrypt.genSaltSync(10);
  console.log(password)
  return bcrypt.hashSync(password, salt);
}

function checkPass(password, hashedPass) {
  return bcrypt.compareSync(password, hashedPass);
}

module.exports = { hashPass, checkPass };
