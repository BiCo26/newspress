
const bcrypt = require('bcryptjs');
const User = require('../../models/user');

//uses bcrypt to compare password from input to DB
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

//connected to auth-routes to redirect user to user profile
function loginRedirect(req, res, next) {
  console.log ("here here");
  if (req.user) return res.redirect('/user');
  return next();
}

//redirects users that are not logged in
function loginRequired(req, res, next) {
  if (!req.user) 
    // return res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,

}