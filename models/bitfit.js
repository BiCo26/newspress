const db = require('../db/config');

const Bitfit = {};

Bitfit.findAll = () => {
  return db.query(`SELECT * FROM bitfit`);
};

Bitfit.findById = id => {
  return db.oneOrNone(
    `
    SELECT * FROM bitfit
    WHERE id = $1
  `,
    [id]
  );
};

Bitfit.create = bitfit => {
  return db.one(
    `
    INSERT INTO bitfit
    (1, 2, 3, 4, 5)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
  `,
    [ 1,2,3,4]//these are place holders
  );
};

Bitfit.update = (bitfit, id) => {
  return db.one(
    `
    UPDATE bitfit SET
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



Bitfit.destroy = id => {
  return db.none(
    `
    DELETE FROM bitfit
    WHERE id = $1
  `,
    [id]
  );
};

module.exports = Bitfit;
