const express = require('express');
const Router = express.Router();

const newspressController = require('../controllers/newspress-controller');

newspressRouter.get('/', newspressController.index);
newspressRouter.post('/', newspressController.create);

newspressRouter.get('/:id', newspressController.show);
newspressRouter.put('/:id', newspressController.update);
newspressRouter.delete('/:id', newspressController.destroy);

module.exports = newspressRouter;
