import React, {Component} from 'react';
import axios from 'axios';

class Forum extends Component{
    constructor(){
        super()
        this.state = {
            post: null
        }
     this.contentUpdate = this.contentUpdate.bind(this);   
    }
    contentUpdate(e) {
    this.setState({
      post: e.target.value
    });
    console.log(this.state.post);
    }

    render(){
    return(   <div classNmae='forum'>
            <form >
                <textarea value={this.state.post} onChange={this.contentUpdate}/>
                <input type='submit' value='Comment'/>
            </form>
        </div>
        )
    }
}

export default Forum;