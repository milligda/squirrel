import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Input, FormBtn } from "../Form";
import API from "../../../utils/API";
import "./login.css";
import Notifier, { openSnackbar } from '../../Notifier';

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirectTo: null
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.loginUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log(res);
        this.setState({ redirectTo: "/home" });
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={ this.state.redirectTo} />
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="form-container">
              <form>
                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Email (required)"
                /> <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                name="password"
                placeholder="password"
                /> 
                <Notifier /> 
                <FormBtn
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Login
                </FormBtn>
              </form>   
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Login;
