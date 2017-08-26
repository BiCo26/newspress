import React, { Component } from 'react';


import GetNews from './GetNews';
import defaultSources_Json from "../data/defaultHomeSources";

class DefaultHome extends Component {
    constructor(props) {
    super(props);
        this.state = {
        defaultSources:defaultSources_Json
    }
    
    }


    renderDefaultHome(){
            console.log ("rendering default home"); 
            console.log (this.state.defaultsources)
          return this.state.defaultSources.map(source => {
        return (
          <div>  
            <h1 className='defaultTag'><span className = 'SOURCE'>SOURCE:</span> {source.source.code}</h1>
            <GetNews source={source.source.code}/>
          </div>
        );
      });
    }
    
        

  render() {
    return (
      <div >
            {this.renderDefaultHome()}
         
      </div>
    )
  }

}


export default DefaultHome;