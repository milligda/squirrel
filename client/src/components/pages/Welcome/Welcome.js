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
    var welcomeStyles = {
      float: 'left',
    }
    var mainContainerStyles = {
      background: '#ffc897'
    }

    return (
      <div className="welcome-container">
        
        <div className="page-container" id="welcome" style={mainContainerStyles}>
          
          <div className="app-info" >
            <h1 id="welcome-msg">Welcome to Squirrel.</h1>
            <br/>
            <h2>All the videos you want stored in one place.</h2>
            <br/>
            {/* <h2>Save videos to watch later or organize them into playlists as you go.</h2> */}
            {/* <br/> */}
            
            <h2><a id="chrome-link" href="https://chrome.google.com/webstore/category/extensions?hl=en">Get the Chrome extension</a></h2>
          </div>

          <div id="forms" sstyle={welcomeStyles}>
          ` <br/>
            < Login  />

            < Signup />
            <br/>
            <br/>
            <br/>
          </div>
            
        </div>

        {/* <Footer /> */}
      </div>
      
    );
  }
}

export default Welcome;
