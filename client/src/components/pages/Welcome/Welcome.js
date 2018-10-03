import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import Login from "../../partials/Login/Login";
import "./welcome.css";
import Signup from "../../partials/Signup";
import Footer from "../../partials/Footer/Footer.js"

class Welcome extends Component {
  state = {
    loggedIn: null,
    userId: null
  };

  componentDidMount = () => {
    this.getUser();
  };

  getUser = () => {
    API.getUserStatus()
      .then(res => {
        console.log(res);
        this.setState({
          loggedIn: res.data.loggedIn,
          userId: res.data.userId
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />;
    }

    var welcomeContainerStyle = {
      height: '100%',
    }

    var separationID ={
      height: '100%',
    }

    var pageContainerStyles = {
      'padding-top': '50px',
      // 'min-height': '100%',
      height: '800px',
      'background-color':'#ffc897',
    }

    var formStyles = {
      float: 'left',
      background: '#ffc897',
      padding: '10px',
    }

    

    

    return (
      <div className="welcome-container" style={welcomeContainerStyle}>

          <div className="page-container" id="welcome" style={pageContainerStyles}>
            
            <div className="app-info" >
              <h1 id="welcome-msg">Welcome to Squirrel.</h1>
              <br/>
              <h2>All the videos you want stored in one place.</h2>
              <br/>
              
              <h2><a id="chrome-link" href="https://chrome.google.com/webstore/category/extensions?hl=en">Get the Chrome extension</a></h2>
            </div>

            <div id="forms" style={formStyles}>
            ` <br/>
              < Login  />

              < Signup />
              <br/>
              <br/>
              <br/>
            </div>
              
          </div>
        </div>      
    );
  }
}

export default Welcome;
