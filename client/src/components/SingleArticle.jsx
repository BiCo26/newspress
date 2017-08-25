import React, {
	Component
} from 'react';

import axios from 'axios';



class Article extends Component {
constructor(props){
		super(props);
		this.state = {
			source: null,
			dataLoaded: false,
		}
	  this.handleClick = this.handleClick.bind(this);
	//	this.handleSubmit = this.handleSubmit.bind(this);
}

  handleClick(article_object) {
    console.log("button clicked, saving article"); 
    console.log ("ID "+this.props.userID); 
    console.log(article_object,'ioefjsoejfoi',this.props.userID);
    
	  axios.post('news/saveArticle', {
        source: article_object,
        user_id: this.props.userID

      })
      .then(res => {
		    console.log("Posted"+ article_object.title);
        console.log(res);
      })
      .catch(err => console.log(err));

	}
  

   render() {
        return (
          <div className="article">
            <button type="button"><a href={this.props.articleData.url}  target="_blank" >view article</a></button>
            <button type="button" onClick={()=>{this.handleClick(this.props.articleData, this.updateArticles)}}>Save Article</button>
            <h2 className = 'singleArticle_title'>{this.props.articleData.title}</h2>
            <img className = 'articleImg' src={this.props.articleData.urlToImage} />
            <p>{this.props.articleData.description}</p>
          </div>
        )
      }
}
export default Article;