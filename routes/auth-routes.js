
const express = require('express');
const authRoutes = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRoutes.get('/login', authHelpers.loginRedirect, (req, res) => {
});

authRoutes.get('/register', authHelpers.loginRedirect, (req, res) => {
});
//creates a new user 
authRoutes.post('/register', usersController.create);

//submits User login form
authRoutes.post('/login', passport.authenticate('local', {
    successRedirect: '/user', 
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

//logout
authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = authRoutes;