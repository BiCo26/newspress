import React from 'react';



const Article = (props) => {
  return (
    <div className="article">
      <h2>{props.articleData.title}</h2>
      <p>{props.articleData.description}</p>
      <img src={props.articleData.urlToImage} />
    </div>
  )
}

export default Article;