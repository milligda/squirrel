import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Welcome from "./components/pages/Welcome";
import Signup from "./components/partials/Signup";
import Login from "./components/partials/Login";
import Restricted from "./components/pages/Restricted";
import Collection from "./components/pages/Collection";
import PageNotFound from "./components/pages/PageNotFound";



class App extends Component {

  state = {
    loggedIn: false,
    username: null
  }

  componentDidMount() {
    // this.getUser()
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={ Welcome } />
          <Route exact path="/signup" component={ Signup } />
          <Route 
            exact path="/login" 
            render={() => 
              <Login updateUser={this.updateUser} />
            }
          />
          <Route exact path="/restricted" component={ Restricted } />
          <Route exact path="/collections/:id" render={ props => <Collection {...props} /> } />
          <Route exact path="/404" component= {PageNotFound} />
        </div>
      </Router>
    )
  }
};
  
export default App;
