const express = require('express');
const newspressRoutes = express.Router();

const newspressController = require('../controllers/newspress-controller');

newspressRouter.get('/', newspressController.index);
// newspressRouter.post('/', newspressController.create);
newspressRoutes.post('/', authHelpers.loginRequired, newspressController.create);//B

// newspressRouter.get('/:id', newspressController.show);
// newspressRouter.put('/:id', newspressController.update);
// newspressRouter.delete('/:id', newspressController.destroy);


// newspressRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
//   res.render('newspress/newspress-add', {
//     currentPage: 'add',
//   });
// });

// newspressRoutes.get('/:id/edit', authHelpers.loginRequired, newspressController.edit);
// newspressRoutes.get('/:id', newspressController.show);
// newspressRoutes.put('/:id', authHelpers.loginRequired, newspressController.update);
// newspressRoutes.delete('/:id', authHelpers.loginRequired, newspressController.delete);


module.exports = newspressRoutes;
