import React, {
	Component
} from 'react';

import sources from "../data/mainSources";
import axios from 'axios';

class SourceChoices extends Component {

	constructor(props) {
		super(props);
		this.state = {
			//sourceInputArray: [],
			source: null,
			dataLoaded: false,
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


 
	  handleClick(source_object) {

      console.log(source_object,'ioefjsoejfoi',this.props.userID);

	  axios.post('/news', {
        source: source_object,
        user_id: this.props.userID

      })
      .then(res => {
		console.log("Posted"+ source_object.source.name);
        console.log(res);
      })
      .catch(err => console.log(err));
       

		// let updatedSources = this.state.sourceInputArray;
		// updatedSources.push(source_object
		// 	);
		// console.log(this.state.sourceInputArray[0].code);

		// this.setState({
		// 	sourceInputArray: updatedSources,
		// })

	}


	handleSubmit(event) {
        
        event.preventDefault();
        
        axios.post('/news/userSources',{user_id:this.props.userID})
        .then(response => {
          console.log(response);
           this.props.retrieveUserSources(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
		

	}
        render() {
                    return <div className="source_choices">
                        
                        <form name="sources-form" onSubmit={this.handleSubmit}>
                            {/* <input  className="search" type="text"  name="sourceVal" placeholder='Enter a source here' onChange={this.handleChange}/> */}
                            <input className="addSource button" type="submit"  value="add" />
                        </form>


                        <ul className="selectSourcesList">
                          
                        <p>{this.props.test}</p>
                        {sources.map(source=>{
                        return (
            
                        <li className = 'register_image_li'>
                            <div className="source_icon_container">
                                <div onClick= {()=>this.handleClick(source)}>
                                <img className="source_icon" src={source.source.img}  />
                                </div >
                                <h1>{source.source.name}</h1>
                                {source.id}
                            </div>
                        </li>
                        )})}
                    </ul>                               
                    </div>
        }
}

export default SourceChoices;