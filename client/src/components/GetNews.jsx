import React, { Component } from 'react';
import SingleArticle from './SingleArticle';
import axios from 'axios';

class GetNews extends Component {
    constructor() {
      super();
      this.state = {
        apiData: null,
        apiDataLoaded: false,
        testSource:"the-next-web",
        sortBy:["latest","top"]
      }
      this.loadDataRetry=this.loadDataRetry.bind(this);
    }

    loadDataRetry(sortPara){
        console.log("in the try")
        axios.get (`https://newsapi.org/v1/articles?source=${this.props.source}&sortBy=${sortPara}&apiKey=e6464d36bd314a01895cbeb7ee81bafe`)
        .then(res => {
            console.log(res.data.articles)
            this.setState({
            apiDataLoaded: true,
            apiData: res.data.articles,
            })
          }).catch(function(err){
        });
    }
    componentDidMount(props){
        let retry= this.loadDataRetry;
        let x=this.props.source;
        axios.get (`https://newsapi.org/v1/articles?source=${this.props.source}&sortBy=latest&apiKey=e6464d36bd314a01895cbeb7ee81bafe`)
        .then(res => {
        console.log(res.data.articles)
        this.setState({
            apiDataLoaded: true,
            apiData: res.data.articles,
        })
        }).catch(function(err){
        if (err.response.data.code=="sourceUnavailableSortedBy"){
          console.log("itworks");
          retry("top")
        }
        console.log(err.response)
        });
    }

    renderArticles() {
        if (this.state.apiDataLoaded) {
            return this.state.apiData.map(article => {
              return (
              
                    
              <SingleArticle key={article.title} articleData={article} userID={this.props.userID}/>
       
              ); });
        } else return <p>Loading...</p>
        }
    render() {
          return (
              <div className="article-single">
                {this.renderArticles()}
              </div>
          )}
  }
  

export default GetNews;