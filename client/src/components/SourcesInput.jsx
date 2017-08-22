
import React, { Component } from 'react';
import GetNews from './GetNews';



class SourcesInput extends Component {
    
    constructor(props) {
    super(props);
    this.state = {
       sourceInputArray:[],
       source:null,
       dataLoaded: false, 
    }

     this.handleChange= this.handleChange.bind(this);
     this.handleSubmit= this.handleSubmit.bind(this);
}
   

handleChange(event){
  this.setState({
      source:event.target.value,
  });

  console.log( 'adding  ' +this.state.source ); 
}



handleSubmit(event){
 
    event.preventDefault();   
    
    let updatedSources=this.state.sourceInputArray; 
        updatedSources.push(this.state.source);

    this.setState({
     sourceInputArray: updatedSources,
    })
  
    console.log(  "entered " + this.state.sourceInputArray);  
    event.target.sourceVal.value='';

}


 renderSources() {
    if (this.state.sourceInputArray) {
      return this.state.sourceInputArray.map(source => {
        return (
         <div>   
          <h1>{source}+++++++++++++++++++++++++++++++++++++++++++++++</h1>
          <GetNews source={source}/>
          </div>
        );
      });
    } else return <p>Loading...</p>
  }

  render() {
    return (
      <div className="sources-container">
        <form name="sources-form" onSubmit={this.handleSubmit}>
          <input  className="search" type="text"  name="sourceVal" placeholder='Enter a source here' onChange={this.handleChange}/>
          <input className=" addSource" type="submit"  value="add" />
         
        </form>
         <p1>{this.renderSources()}</p1>
      </div>
    );
  }
}

export default SourcesInput;
