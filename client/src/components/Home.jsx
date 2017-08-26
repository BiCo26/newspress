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
        console.log ("test props "+ this.props.userSources);
    }
    //deleting source V
    deleteSavedSource(source_id){
        console.log(source_id)
        axios.post(`/news/deleteSource`,{
            source_id:source_id
        }) 
        .then(res =>{
            console.log(res);
            this.setState({
            fireRedirect: true,
            });
        }).catch(err => {
            console.log(err);
        });
    }

    //deleting source ^
    renderSelectSources(){
        if (!this.state.dataLoaded){
            return (
                <div>
                  <SelectSources test={this.returnSources}/>
                </div>
            )
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
                              <button className="delete" type="button" onClick={()=>{this.deleteSavedSource(source.id)}}>Delete Source</button>
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