import React, { Component } from 'react';

import axios from 'axios';
import Forum from './Forum'


class UserArticleSingle extends Component {
  constructor() {
    super();
    this.state = {
      article: null,
      apiDataLoaded: false,
      fireRedirect: false,
    }

  }

renderArticleOrLoading() {
     return (
        <div className="inner">
            Single Article Component Loaded
              <h1>{this.props.article.title}</h1>
              <p>{this.props.article.description}</p>
              <img src={this.props.article.image_url}/>
              <Forum username={this.props.userName} article_title={this.props.article_title}/>
            </div>
            )
}



  render() {
    return (
      <div className="userArticle-single">
        {this.renderArticleOrLoading()}
      </div>
    )
  }
}

export default UserArticleSingle;