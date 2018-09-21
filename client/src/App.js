import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/partials/Header";
import Welcome from "./components/pages/Welcome";
import Home from "./components/pages/Home";
import Signup from "./components/partials/Signup";
import Login from "./components/partials/Login";
import Logout from "./utils/Logout";
import Restricted from "./components/pages/Restricted";
import API from "./utils/API";
import Collection from "./components/pages/Collection";
import PageNotFound from "./components/pages/PageNotFound";


class App extends Component {

  state = {
    loggedIn: true,
    userId: null
  }

  componentDidMount = () => {
    this.getUser();
  }

  updateUser = (userObject) => {
    console.log(userObject);
    this.setState(userObject);
  }

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
  }

  render() {

    return (
      <Router>
        <div>
          <Header />
          <Switch>

            <Route exact path="/" component={ Welcome } />

            <Route exact path="/login" render={() => (
              <Login updateUser={this.updateUser} />
            )} />

            <Route exact path="/signup" render={() => (
              <Signup updateUser={this.updateUser} />
            )} />

            <Route exact path="/home" render={() => (
              !this.state.loggedIn ? 
              (<Redirect to="/restricted" />) 
              : (<Home />)
            )} />

            <Route exact path="/logout" render={() => (
              <Logout loggedIn={this.state.loggedIn} />
            )} />

            <Route exact path="/restricted" component={ Restricted } />
            <Route exact path="/collections/:id" render={ props => <Collection {...props} /> } />
            <Route exact path="/404" component= {PageNotFound} />

          </Switch>
        </div>
      </Router>
    )
  }
};
  
export default App;
