
const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login', {
    currentPage: 'login', 
  });
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register', {
    currentPage: 'register', 
  });
});
//creates a new user 
authRouter.post('/register', usersController.create);

//submits User login form
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/user', 
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);