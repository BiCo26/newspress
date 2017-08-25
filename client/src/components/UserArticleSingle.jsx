import React, { Component } from 'react';

import axios from 'axios';



class UserArticleSingle extends Component {
  constructor() {
    super();
    this.state = {
      article: null,
      apiDataLoaded: false,
      fireRedirect: false,
    }
    //this.deleteIceCream = this.deleteIceCream.bind(this);
  }

renderArticleOrLoading() {
     return (
        <div className="inner">
            Single Article Component Loaded
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