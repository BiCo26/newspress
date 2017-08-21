const express = require('express');
const Router = express.Router();

const bitfitController = require('../controllers/bitfit-controller');

bitfitRouter.get('/', bitfitController.index);
bitfitRouter.post('/', bitfitController.create);

bitfitRouter.get('/:id', bitfitController.show);
bitfitRouter.put('/:id', bitfitController.update);
bitfitRouter.delete('/:id', bitfitController.destroy);

module.exports = bitfitRouter;
