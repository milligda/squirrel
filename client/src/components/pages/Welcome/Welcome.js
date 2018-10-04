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

    // var welcomeContainerStyle = {
    //   height: '100%',
    // }

    // var separationID ={
    //   height: '100%',
    // }

    // var pageContainerStyles = {
    //   'padding-top': '50px',
    //   height: '800px',
    //   'background-color':'#ffc897',
    // }

    // var formStyles = {
    //   float: 'left',
    //   background: '#ffc897',
    //   padding: '10px',
    // }

    return (
      <div className="welcome-container">

        <Header />

          <div className="page-container container welcome-page-container">
          
            <div className="row">
            
              <div className="col-md-6 welcome-content-container welcome-msg-container">
                <h1>Welcome to Squirrel!</h1>
                <h2>Squirrel away videos from YouTube or Vimeo.</h2>
                <h2>Curate your own playlists.</h2>
                <h2>Watch when you want!</h2>

                <a href="https://chrome.google.com/webstore/detail/squirrel/ddfnjccdalikdhoaelepmoldpgookabe">
                  <button className="squirrel-btn squirrel-red-btn">
                    Get The Chrome Extension
                  </button>
                </a>  
              </div>

              <div className="col-md-1 spacer-div"></div>

              <div className="col-md-5 welcome-content-container auth-container">
                <Login />
                <Signup />
              </div>
            
            </div>
          
          </div>
        </div>      
    );
  }
}

export default Welcome;
