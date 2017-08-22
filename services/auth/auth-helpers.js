
const bcrypt = require('bcryptjs');
const User = require('../../models/user');

//uses bcrypt to compare password from input to DB
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

//connected to auth-routes to redirect user to user profile
function loginRedirect(req, res, next) {
  if (req.user) return res.redirect('/user');
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
}