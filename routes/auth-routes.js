
const express = require('express');
const authRoutes = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');



//creates a new user 
authRoutes.post('/register',function(){
  console.log("testing123")
},usersController.create);

//submits User login form
authRoutes.post('/login', passport.authenticate('local', {
    successRedirect: '/auth/success', 
    failureRedirect: '/auth/failure',
    failureFlash: true,
  }))

  authRoutes.get('/success', (req, res) => {
  res.json({
    auth: true,
    message: 'ok',
    user: req.user,
  });
});

authRoutes.get('/failure', (req, res) => {
  res.json({
    auth: false,
    message: 'Login failed',
    user: null,
  });
});

//logout
authRoutes.get('/logout', (req, res) => {
  req.logout();
  res.json({
    message: 'logged out',
    auth: false,
  })
});


module.exports = authRoutes;