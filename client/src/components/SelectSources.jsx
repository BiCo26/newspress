import React, {
	Component
} from 'react';

import sources from "../data/defualtSources";
import axios from 'axios';

class SourceChoices extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sourceInputArray: [],
			source: null,
			dataLoaded: false,

		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}



	handleClick(source_object) {
      axios.post('/auth/register', {
        source: source_object
      })
      .then(res => {
		console.log("Posted"+ source_object.source.name);
        console.log(res);
      })
      .catch(err => console.log(err));


        console.log(source_object);
	  axios.post('/news', {
        source: source_object
      })
      .then(res => {
		console.log("Posted"+ source_object.source.name);
        console.log(res);
      })
      .catch(err => console.log(err));



		let updatedSources = this.state.sourceInputArray;
		updatedSources.push(source_object
			);
		console.log(this.state.sourceInputArray[0].code);

		this.setState({
			sourceInputArray: updatedSources,
		})


	}

	handleSubmit(event) {

		event.preventDefault();
		this.props.test(this.state.sourceInputArray)
		console.log(this.state.sourceInputArray);

	}
        render() {
                    return <div className="source_choices">
                        <ul>
                        <p>{this.props.test}</p>
                        <form name="sources-form" onSubmit={this.handleSubmit}>
                            <input  className="search" type="text"  name="sourceVal" placeholder='Enter a source here' onChange={this.handleChange}/>
                            <input className=" addSource" type="submit"  value="add" />
                        </form>
                        {sources.map(source=>{
                        return (
                        <li >
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