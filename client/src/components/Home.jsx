import React, { Component } from 'react';


import SourcesInput from './SourcesInput';
import SelectSources from './SelectSources';
import GetNews from './GetNews';
import userTestSources_Json from "../data/testUserSources";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
    super(props);
        this.state = {
        recievedUserInfo:false, 
        userInfo:null, 
        auth:false,
        sourcesLoaded:false,
        sourcesData:null,
        fireRedirect:false        
    }
        //this.handleClick = this.handleClick.bind(this);
        this.returnSources=this.returnSources.bind(this);
        this.deleteSavedSource = this.deleteSavedSource.bind(this);
    }

    componentDidMount(){
       this.setState({
         recievedUserInfo:true, 
         auth:this.props.auth,
         sourcesLoaded:true,
         sourcesData: this.props.userSources//userTestSources_Json
       })

       //console.log ( "user sources array: "+this.state.sourcesData);
       console.log ("test props "+ this.props.userSources);
       
    }

    handleClick(){//delete source on click
      console.log("delete source");
    }

    //deleting source V
    deleteSavedSource() {
    axios.delete(`/news/${this.props.match.params.id}`) 
      .then(res => {
        console.log(res);
        this.setState({
          fireRedirect: true,
        });
      }).catch(err => {
        console.log(err);
      });
  }
  //deleting source ^

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
    
      if (!this.state.sourcesData){
      return <p className="message">No Sources Saved</p>;
      }
      else if (this.state.sourcesData){
            console.log ("ready"); 
            console.log ("the data" + this.state.sourcesData)
            console.log (typeof this.state.sourcesData )
          return this.state.sourcesData.map(source => {
        return (
          <div> 
            <div className="userHome_source"> Viewing New From {source.source_code}
            <button className="delete" type="button" onClick={()=>{this.deleteSavedSource()}}>Delete Source</button>
           
            </div>
            <GetNews source={source.source_code} userID={this.props.userID }/>
          </div>
        );
      });
    }

}


  render() {
    return (
      <div >
            {this.renderHomePage()}
      </div>
    )
  }

}


export default Home;