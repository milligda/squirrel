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
import PageNotFound from "./components/pages/PageNotFound";
<<<<<<< HEAD
import PlaylistList from "./components/pages/Playlist";
=======
import CollectionList from "./components/pages/Collection";
import Video from "./components/pages/Video";
import PlaylistPlayer from "./components/pages/ListPlayer";
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b



class App extends Component {

  state = {
    loggedIn: null,
    userId: null
  }

  componentDidMount = () => {
    // this.getUser();
  }

  updateUser = (userObject) => {
    console.log(userObject);
    this.setState(userObject);
  };

<<<<<<< HEAD
  loadPlaylists = () => {
    API.getPlaylists()
      .then(res => this.setState({ Playlists: res.data }))
=======
  loadCollections = () => {
    API.getPlaylists()
      .then(res => this.setState({ collections: res.data }))
>>>>>>> 97fe377abbc7e0c6999f196f02ed050146751f1b
      .catch(err => console.log(err));
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
  }

  render() {

    return (
      <Router>
        <div id="app-container">
          {/* <Header /> */}
          <Switch>

            <Route exact path="/" component={ Welcome } />

            <Route exact path="/login" render={() => (
              <Login updateUser={this.updateUser} />
            )} />

            <Route exact path="/signup" render={() => (
              <Signup updateUser={this.updateUser} />
            )} />

            <Route exact path="/home" component={ Home } />

            <Route exact path="/logout" component={ Logout } />

            <Route exact path="/video/:id" component={ Video } />

            <Route exact path="/playlist/play/:id" component={ PlaylistPlayer } />

            <Route exact path="/restricted" component={ Restricted } />
            <Route exact path="/Playlists/" component={PlaylistList} /> } />
            <Route exact path="/404" component= {PageNotFound} />

          </Switch>
        </div>
      </Router>
    )
  }
};
  
export default App;
