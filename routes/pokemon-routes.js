const express = require('express');
const Router = express.Router();

const pokemonController = require('../controllers/pokemon-controller');

pokemonRouter.get('/', pokemonController.index);
pokemonRouter.post('/', pokemonController.create);

pokemonRouter.get('/:id', pokemonController.show);
pokemonRouter.put('/:id', pokemonController.update);
pokemonRouter.delete('/:id', pokemonController.destroy);

module.exports = pokemonRouter;
