import React, { Component } from 'react';
import axios from 'axios';

class UserSavedArticles extends Component {

    constructor(props) {
    super(props);
    this.state = {
      savedArticlesArray: null,
      dataLoaded: false, 
    }
}


componentWillMount(){
    console.log("props user ID "+ this.props.userID);
    axios.post('/news/userSavedArticles', {Id:this.props.userID} )
        .then(res => {
            console.log(res.data)
            console.log(res.data.data)
            this.setState({
                 
                    savedArticlesArray: res.data.data,
                       dataLoaded: true,
                })
        }).catch(err =>{console.log(err.response)
    });
}




renderSavedArticles(){
    if (!this.props.auth)  return <p className="message">Please Login</p>;
    else if (!this.state.dataLoaded) return <p className="message">No Articles Saved</p>;
    else if (this.state.dataLoaded && this.props.auth) {
      return this.state.savedArticlesArray.map(article => {
        return (
         <div>   
            <h1 className="userArticle">Viewing User Saved Article</h1>   
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <img src={article.image_url}/>
          </div>
        );
      });
    }else return <p className="message">Loading Data</p>
}


    render(){
        return(
              <div>{this.renderSavedArticles()}</div>
        )
    }
}





export default UserSavedArticles;