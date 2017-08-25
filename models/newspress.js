const db = require('../db/config');

const Newspress = {};


Newspress.userSources = id => {
  return db.manyOrNone(`
    SELECT 
    sources.image_url,
    sources.source_name,
    source.source_code,
    FROM 
    users JOIN join_table
    ON join_table.user_id = users.id
    WHERE user_id = $1 
    sources JOIN join_table
    ON sources.id = join_table.source_id  
  `, [id]);
};

Newspress.findUserSources = id => {
  return db.many(
    `
    SELECT * FROM sources
    WHERE user_id = $1
  `,
    [id.user_id]
  );
};

Newspress.create = newspress => {
  return db.one(
    `
    INSERT INTO sources
    (image_url, source_name, source_code,user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [ newspress.image_url,newspress.source_name,newspress.source_code, newspress.user_id]//these are place holders
  );
};

Newspress.insertArticle = newspress => {
  console.log ("we are in the modal posting to "+ newspress.user_id +" **");
  return db.one(
    `
    INSERT INTO articles
    (author,description,publishedAt,title,url,image_url, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `,
    [ newspress.author,newspress.description,newspress.publishedAt,newspress.title,newspress.url,newspress.image_url, newspress.user_id]//these are place holders
  );
};


Newspress.userArticles = id => {
  console.log ("we are in the modals getting articles "+ id.Id);
  return db.many(
      `
      SELECT * FROM articles
      WHERE user_id = $1
    `,
      [id.Id]
    );
};


Newspress.topic = topic => {
  return db.one(`
  INSERT INTO posts
  (username, topic, article_title)
  VALUES ($1, $2, $3)
  RETURNING *
  `,
  [topic.username, topic.topic, topic.article_title]
);
};

Newspress.findArticleTopics = title => {
  return db.query(
    `
    SELECT * FROM posts
    WHERE article_title = $1 
    ORDER by id DESC
    `,
    [title]
  );
};




//We have access to all of the user's information on req.user, so 
//we can use that in our Movie.create model method. In models/movie.js:
//NOT FINISHED >
// Newspress.create = (newspress, id) => {
//   return db.one(
//     `INSERT INTO movies (title, year, genre, user_id) 
//     VALUES ($1, $2) RETURNING *`,
//     [movie.title, movie.year, movie.genre, id]);
// }


Newspress.update = (newspress, id) => {
  return db.one(
    `
    UPDATE newspress SET
      1 = $1,
      2 = $2,
      3 = $3,
      4 = $4,
      
    WHERE id = $6
    RETURNING *
  `,
    [ 1,2,3,4, id]//these are place holders
  );
};


Newspress.destroy = id => {
  return db.none(
    `
    DELETE FROM newspress
    WHERE id = $1
  `,
    [id]
  );
};



module.exports = Newspress;
