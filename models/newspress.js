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

Newspress.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM newspress
    WHERE id = $1
  `,
    [id]
  );
};

Newspress.create = newpress => {
  return db.one(
    `
    INSERT INTO newspress
    (1, 2, 3, 4, 5)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `,
    [ 1,2,3,4]//these are place holders
  );
};

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
