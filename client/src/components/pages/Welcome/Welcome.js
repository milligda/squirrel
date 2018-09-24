import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Login from "../../partials/Login/Login";
import "./welcome.css";
import Signup from "../../partials/Signup";

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
      <div className="container">
        <h1>Squirrel Home Page Tagline!</h1>
        <br/>
        <p>Info about Squirrel app goes here here here</p>
        <p>Sign up or Log in to get started!</p>
        
        <Login className="login"/>
        <Signup className="signup"/>

        {/* <a>Link to app in Chrome store</a> */}
      </div>
    );
  }
}

export default Welcome;
