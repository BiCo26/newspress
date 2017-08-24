import React, { Component } from 'react';


import SourcesInput from './SourcesInput';
import SelectSources from './SelectSources';
import GetNews from './GetNews';


class Home extends Component {
    constructor(props) {
    super(props);
        this.state = {
        sourceData:null,
        dataLoaded: false,
        default:[]
        
    }
    
        this.returnSources=this.returnSources.bind(this);
    }

    returnSources(sources_input){
        console.log("bleh")
        console.log(sources_input);
        
         this.setState({
           sourceData:sources_input,
           dataLoaded:true, 
        })

        console.log (this.state.sourceData + "yellow");
    }

    renderSelectSources(){
        if (!this.state.dataLoaded){
            return (
         <div>
           <SelectSources test={this.returnSources}/>
           </div>)
        }
    }

    renderDefaultHomePage(){
      if (!this.props.auth){
        console.log(this.props.auth + "checking for auth");
      }
    }
    renderHomePage(){
        if (this.state.dataLoaded){
            console.log ("ready"); 
            console.log (this.state.soureData)
          return this.state.sourceData.map(source => {
        return (
          <div>  
            <h1>{source.source.code}+++++++++++++++++++++++++++++++++++++++++++++++</h1>
            <GetNews source={source.source.code}/>
          </div>
        );
      });
    }
    }
        

  render() {
    return (
      <div >
            {this.renderDefaultHomePage()}
           {this.renderSelectSources()}
          {this.renderHomePage()}
      </div>
    )
  }

}


export default Home;