import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import API from "../../../utils/API";
import "./signup.css";

class Signup extends Component {
  state = {
    userEmail: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.userEmail && this.state.password) {
      API.createUser({
        userEmail: this.state.userEmail,
        userPassword: this.state.password
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-container">
            <form>
              <Input
                value={this.state.userEmail}
                onChange={this.handleInputChange}
                name="userEmail"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="password"
              />
              <FormBtn
                disabled={!(this.state.userEmail && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Signup
              </FormBtn>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
