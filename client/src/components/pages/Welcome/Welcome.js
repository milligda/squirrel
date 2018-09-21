import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";

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
      <Redirect to="/home" />;
    }

    return (
      <div>
        <h1>Welcome to the Squirrel Home Page!</h1>
      </div>
    );
  }
}

export default Welcome;
