
const db = require('../db/config');
const User = {};

User.findByUserName = userName => {
  return db.oneOrNone(
    `SELECT * FROM users WHERE username = $1`,
     [userName]);
};

User.create = user => {
  return db.one(
    `INSERT INTO users (username, password_digest)
    VALUES ($1, $2) RETURNING *`,
    [user.userName, user.password_digest ]);
};

module.exports = User;