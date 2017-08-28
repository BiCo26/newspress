-- DROP DATABASE IF EXISTS newspress_dev;
-- CREATE DATABASE newspress_dev;
-- \c newspress_dev


CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sources (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  source_name VARCHAR(255) NOT NULL,
  source_code VARCHAR(255) NOT NULL,
  user_id INT REFERENCES users(id) NOT NULL 
);

CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255),
  description VARCHAR(255),
  publishedAt VARCHAR(255),
  title VARCHAR(255) ,
  url VARCHAR(255) ,
  image_url VARCHAR(255) ,
  user_id INT REFERENCES users(id) 
);


CREATE TABLE if NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) ,
  topic VARCHAR(255),
  article_title VARCHAR(255) NOT NULL
);

CREATE TABLE if NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id),
  user_id INT REFERENCES users(id),
  comments VARCHAR(255)
);



