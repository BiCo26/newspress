 
const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const app = express();
require('dotenv').config();
app.use(logger('dev'));

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
// static files
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
app.get('/', (req, res) => {
  res.render('index', {
    message: "We are live!"
  });
});*/


/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT} 00`);
});

app.get('/', (req, res) => {
  res.send('We are live!');
});

const newspressRoutes = require('./routes/newspress-routes');
app.use('/news', newspressRoutes);

//additional routes
// const newspressRoutes = require('./routes/newspress-routes');
// app.use('/newspress', newspressRoutes);

/*const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);*/


app.get('*', (req, res) => {
    const err = new Error('not found!');
    res.status(404).send(err);
});
