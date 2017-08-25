import React, {Component} from 'react';
import axios from 'axios';
import Topic from './Topic'

class Forum extends Component{
    constructor(){
        super()
        this.state = {
            topic: null,
            posts: [],
        }
     this.contentUpdate = this.contentUpdate.bind(this);  
     this.handleTopicSubmit = this.handleTopicSubmit.bind(this); 
    }
// call the api to get all topics in the database
    componentDidMount(){
     axios.get(`/news/topic/${this.props.article_title}`, {
        params: {
            title:this.props.article_title
        }
     }).then(res => {
         console.log('we are back to react')
         console.log(res.data.data)
       this.setState({
           posts:res.data.data
       })
     }).catch(err => console.log(err));
    }

// when a new topic is posting, link to backend to add data in posts table
    handleTopicSubmit(username,article_title) {
      console.log(this.props.username)  
      axios.post('/news/topic', {
      username: this.props.username,
      topic: this.state.topic,
      article_title: this.props.article_title
    }).then(res => {
        this.renderCurrentTopics()
    }).catch(err => console.log(err));
  }

  // update the input content
    contentUpdate(e) {
    this.setState({
      topic: e.target.value
    });
    console.log(this.state.topic);
    }
  // render the existing posts of article
    renderCurrentTopics(){
        console.log('this is render')
        console.log(this.state.posts)
        return this.state.posts.map(post => {
            return ( <Topic key={post.id} username={post.username} topic={post.topic} />)
        })
    }

    render(){
    return( <div classNmae='forum'> 
             <div classNmae='postnewtopic'>
            <form onSubmit={(e) => this.handleTopicSubmit(this.props.username, this.props.article_title)}>
                <textarea value={this.state.topic} onChange={this.contentUpdate}/>
                <input type='submit' value='Post'/>
            </form>
            </div>
            {this.renderCurrentTopics()}
          </div>
        )
    }
}

export default Forum;