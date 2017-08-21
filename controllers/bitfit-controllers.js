const Bitfit = require('../models/bitfit');

const bitfitController = {};

bitfitController.index = (req, res) => {
  Bitfit.findAll()
    .then(bitfit => {
      res.json({
        message: 'ok',
        data: bitfit,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

bitfitController.show = (req, res) => {
  Bitfit.findById(req.params.id)
    .then(bitfit => {
      res.json({
        message: 'ok',
        data: bitfit,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

bitfitController.create = (req, res) => {
  Bitfit.create({
    flavor: req.body.flavor,
    description: req.body.description,
    rating: req.body.rating,
    url: req.body.url,
    brand: req.body.brand,
  })
    .then(bitfit => {
      res.json({
        message: 'ok',
        data: bitfit,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

bitfitController.update = (req, res) => {
  Bitfit.update(
    {
      flavor: req.body.flavor,
      description: req.body.description,
      rating: req.body.rating,
      url: req.body.url,
      brand: req.body.brand,
    },
    req.params.id,
  )
    .then(bitfit => {
      res.json({
        message: 'ok',
        data: bitfit,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

bitfitController.destroy = (req, res) => {
  Bitfit.destroy(req.params.id)
    .then(bitfit => {
      res.json({
        message: 'ok',
        data: bitfit,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = bitfitController;
