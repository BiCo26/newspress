//creates user
const bcrypt = require('bcryptjs');
const User = require('../models/user.js');

const usersController = {};

usersController.create = (req, res) => {
  
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  User.create({
    username: req.body.username,
    password_digest: hash,
  }).then(user => {
    req.login(user, (err) => {
      if (err) return next(err);
      res.json({
        message: 'ok',
        user: user,
        auth: true,
      })
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error: err});
  });
}

//cnx w/ profile page
usersController.index = (req, res) => {
  res.json({
    user: req.user,
    data: 'Put a user profile on this route'
  });
}

module.exports = usersController;