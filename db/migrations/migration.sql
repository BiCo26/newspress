\c newspress_dev

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
);

CREATE TABLE IF NOT EXISTS articles (
  id SERIAL PRIMARY KEY,
  author VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  publishedAt VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  image_url VARCHAR(255) NOT NULL,
  source_id INT REFERENCES sources(id) 
);


CREATE TABLE IF NOT EXISTS sources (
  id SERIAL PRIMARY KEY,
  image_url VARCHAR(255) NOT NULL,
  source_name VARCHAR(255) NOT NULL,
  source_code VARCHAR(255) NOT NULL,
  article_id INT REFERENCES articles(id) 
);

CREATE TABLE if NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  article_id INT REFERENCES articles(id),
  username VARCHAR(255) REFERENCES users(username),
  topic VARCHAR(255)
);

CREATE TABLE if NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id),
  user_id INT REFERENCES users(id),
  comments VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS join_table (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id) NOT NULL,
  source_id INT REFERENCES sources(id) NOT NULL
);
