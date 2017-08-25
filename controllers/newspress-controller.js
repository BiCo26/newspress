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

newspressController.saveArticle = (req, res) => {
  console.log(req.body, 'disofjdosf',req.body.user_id)
  Newspress.insertArticle(
    { author: req.body.source.author,
      description: req.body.source.description,
      publishedAt: req.body.source.publishedAt,
      title: req.body.source.title,
      url: req.body.source.url,
      image_url: req.body.source.urlToImage,
      user_id: req.body.user_id,
newspressController.createTopic = (req, res) => {
  console.log('going through the newsController')
  Newspress.topic({
    username:req.body.username,
    topic:req.body.topic,
    article_id:req.body.article_id
  })
  .then(topics =>{
    res.json({
      message:'ok',
      data: topics,
    });
  })
  .catch(err =>{
    console.log(err);
    res.status(500).json({ err });
  });
};

newspressController.showTopic = (req, res) => {
  console.log('we are at getting controller')
  console.log(req.body.article_id)
  console.log(req.params.id)
  Newspress.findArticleTopics(req.params.id)
    .then(topics=> {
      console.log(topics)
      res.json({
        message: 'ok',
        data: topics,
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


newspressController.getUserSavedArticles = (req, res) => {
  console.log ("we are in controller getting user articles for "+ req.body.Id);
  Newspress.userArticles({Id: req.body.Id})
    .then( articles => {
        res.json({
        user: req.user,
        data: articles,
        
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({err: err});
    });
}


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
