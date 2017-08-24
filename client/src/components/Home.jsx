import React, { Component } from 'react';


import SourcesInput from './SourcesInput';
import SelectSources from './SelectSources';
import GetNews from './GetNews';
import userTestSources_Json from "../data/testUserSources";


class Home extends Component {
    constructor(props) {
    super(props);
        this.state = {
        recievedUserInfo:false, 
        userInfo:null, 
        auth:false,
        sourcesLoaded:false,
        sourcesData:null,        
    }
    
        this.returnSources=this.returnSources.bind(this);
    }

    componentDidMount(){
       this.setState({
         recievedUserInfo:true, 
         auth:this.props.auth,
         sourcesLoaded:true,
         sourcesData: userTestSources_Json
       })
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
        if (typeof this.state.sourcesData !== undefined){
            console.log ("ready"); 
            console.log ("the data" + this.state.souresData)
            console.log (typeof this.state.sourcesData )
          return this.state.sourcesData.map(source => {
        return (
          <div>  
            <h1>{source.source.code}+++++++++++++++++++++++++++++++++++++++++++++++</h1>
            <GetNews source={source.source.code}/>
          </div>
        );
      });
    }
}
print(){
  if (this.state.auth){
    return(
        <div>
          <h1>testing auth true</h1>
          <h1>{this.props.userInfo.username}</h1>
          {this.renderHomePage()}
        </div>
    )
  }
}

  render() {
    return (
      <div >
           {this.print()}
      </div>
    )
  }

}


export default Home;