const Newspress = require('../models/newspress');

const newspressController = {};

newspressController.index = (req, res) => {
  Newspress.findAll()
    .then(newspress => {
      res.json({
        message: 'ok',
        data: newspress,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

newspressController.show = (req, res) => {
  Newspress.findById(req.params.id)
    .then(newspress => {
      res.json({
        message: 'ok',
        data: newspress,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

newspressController.create = (req, res) => {
  Newspress.create({
    flavor: req.body.flavor,
    description: req.body.description,
    rating: req.body.rating,
    url: req.body.url,
    brand: req.body.brand,
  })
    .then(newspress => {
      res.json({
        message: 'ok',
        data: newspress,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

newspressController.update = (req, res) => {
  Newspress.update(
    {
      flavor: req.body.flavor,
      description: req.body.description,
      rating: req.body.rating,
      url: req.body.url,
      brand: req.body.brand,
    },
    req.params.id,
  )
    .then(newspress => {
      res.json({
        message: 'ok',
        data: newspress,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

newspressController.destroy = (req, res) => {
  Newspress.destroy(req.params.id)
    .then(newspress => {
      res.json({
        message: 'ok',
        data: newspress,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = newspressController;
