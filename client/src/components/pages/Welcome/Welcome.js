import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import Login from "../../partials/Login/Login";
import "./welcome.css";
import Signup from "../../partials/Signup";
import Footer from "../../partials/Footer"

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

    return (
      <div className="welcome-container">
        
      
        <div className="page-container welcome">
          < Login className="login"/>

          <div className="app-info">
            <h1>Squirrel Home Page Tagline!</h1>
            <br/>
            <h2>Save videos to watch later</h2>
            <br/>
            <h2>Create playlists of videos from multiple websites like YouTube and Vimeo</h2>
            <br/>
            
            <a href="https://chrome.google.com/webstore/category/extensions?hl=en">Find us in the Chrome Web Store</a>
          </div>
          
          < Signup />
          
        </div>

        {/* <Footer /> */}
      </div>
      
    );
  }
}

export default Welcome;
