const express = require('express');
const routes = express.routes();

const newspressController = require('../controllers/newspress-controller');

newspressRoutes.get('/', newspressController.index);
// newspressRoute.post('/', newspressController.create);
newspressRoutes.post('/', authHelpers.loginRequired, newspressController.create);//B

// newspressroutes.get('/:id', newspressController.show);
// newspressroutes.put('/:id', newspressController.update);
// newspressroutes.delete('/:id', newspressController.destroy);


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