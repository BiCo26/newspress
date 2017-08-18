const db = require('../db/config');

const Pokemon = {};

Pokemon.findAll = () => {
  return db.query(`SELECT * FROM pokemon`);
};

Pokemon.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM pokemon
    WHERE id = $1
  `,
    [id]
  );
};

Pokemon.create = pokemon => {
  return db.one(
    `
    INSERT INTO pokemon
    (1, 2, 3, 4, 5)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `,
    [ 1,2,3,4]//these are place holders
  );
};

Pokemon.update = (pokemon, id) => {
  return db.one(
    `
    UPDATE pokemon SET
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



Pokemon.destroy = id => {
  return db.none(
    `
    DELETE FROM pokemon
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Pokemon;
