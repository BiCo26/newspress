const Pokemon = require('../models/pokemon');

const pokemonController = {};

pokemonController.index = (req, res) => {
  Pokemon.findAll()
    .then(pokemons => {
      res.json({
        message: 'ok',
        data: pokemons,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

pokemonController.show = (req, res) => {
  Pokemon.findById(req.params.id)
    .then(pokemon => {
      res.json({
        message: 'ok',
        data: pokemon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

pokemonController.create = (req, res) => {
  Pokemon.create({
    flavor: req.body.flavor,
    description: req.body.description,
    rating: req.body.rating,
    url: req.body.url,
    brand: req.body.brand,
  })
    .then(pokemon => {
      res.json({
        message: 'ok',
        data: pokemon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

pokemonController.update = (req, res) => {
  Pokemon.update(
    {
      flavor: req.body.flavor,
      description: req.body.description,
      rating: req.body.rating,
      url: req.body.url,
      brand: req.body.brand,
    },
    req.params.id,
  )
    .then(pokemon => {
      res.json({
        message: 'ok',
        data: pokemon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

pokemonController.destroy = (req, res) => {
  Pokemon.destroy(req.params.id)
    .then(pokemon => {
      res.json({
        message: 'ok',
        data: pokemon,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = pokemonController;
