import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "./API";

class Logout extends Component {
  state = {
    loggedIn: true
  };

  logout = () => {
    API.logout()
      .then(res => {
        console.log(res);
        this.setState({
          loggedIn: false
        });
        localStorage.removeItem('squirrelId');
        // deleting user cookie, doesn't work currently
        document.cookie = res.data.UserId +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=.locahlhost';
        document.cookie = 'userId=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Domain=.locahlhost.com';

      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => {
    this.logout();
  };

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>You are currently being logged out</h1>
      </div>
    );
  }
}

export default Logout;
