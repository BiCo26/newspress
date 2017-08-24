const Newspress = require('../models/newspress');

const newspressController = {};

newspressController.index  = (req, res) => {
  Newspress.userSources(req.user.id)
    .then( sources => {
        res.json({
        user: req.user,
        data: sources,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}


newspressController.show = (req, res) => {
  console.log(req.body.user_id, 'sjadoisjaodi', req.body)
  Newspress.findUserSources({user_id: req.body.user_id})
    .then(newspress => {
      res.json({
        message: 'ok',
        user_id:req.body.user_id,
        data: newspress
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

newspressController.create = (req, res) => {
  console.log(req.body.user_id, 'idjfosjdsofij');

  Newspress.create({
    source_name:req.body.source.source.name,
    source_code:req.body.source.source.code,
    image_url:req.body.source.source.img,
    user_id:req.body.user_id
  })
    .then(newspress => {
      console.log(newspress);
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
