const express = require('express');
const newspressRoutes = express.Router();

const newspressController = require('../controllers/newspress-controller');

newspressRoutes.get('/', newspressController.index);
newspressRoutes.post('/', newspressController.create);

newspressRoutes.get('/:id', newspressController.show);
newspressRoutes.put('/:id', newspressController.update);
newspressRoutes.delete('/:id', newspressController.destroy);

module.exports = newspressRoutes;
