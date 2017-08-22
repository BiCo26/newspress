\c newspress_dev

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

bcryptjs
express-session
cookie-parser
passport
passport-local