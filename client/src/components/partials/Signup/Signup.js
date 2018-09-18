import React, { Component } from "react";
import "./signup.css";
import { Input, FormBtn } from "../Form";

class Signup extends Component {
  state = {
    username: "",
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
    if (this.state.username && this.state.password) {
        console.log(this.state.username);
        console.log(this.state.password);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 form-container">
            <form>
                <Input 
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Email (required)"
                />
                <Input 
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="password"
                />
                <FormBtn
                    disabled={!(this.state.username && this.state.password)}
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
