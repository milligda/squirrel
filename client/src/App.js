import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Header from "./components/partials/Header";
import Welcome from "./components/pages/Welcome";
import Home from "./components/pages/Home";
import Signup from "./components/partials/Signup";
import Login from "./components/partials/Login";
import Logout from "./utils/Logout";
import Restricted from "./components/pages/Restricted";
import API from "./utils/API";
import PageNotFound from "./components/pages/PageNotFound";
import CollectionList from "./components/pages/Collection/CollectionList";
import RecentlySaved from "./components/partials/RecentlySaved";
import Video from "./components/pages/Video";
import PlaylistPlayer from "./components/pages/ListPlayer";
import AddVideo from "./components/pages/AddVideo";
import EditPlaylist from "./components/pages/EditPlaylist/EditPlaylist.js"
import "./App.css";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import NewCollection from "./components/pages/NewCollection/";
import CollectionListItem from "./components/pages/Collection/CollectionListItem";




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

  loadCollections = () => {
    API.getPlaylists()
      .then(res => this.setState({ collections: res.data }))
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

            <Route exact path="/video/add" component={ AddVideo } />

            <Route exact path="/video/:id" component={ Video } />

            <Route exact path="/restricted" component={ Restricted } />
            <Route exact path="/collections" component={CollectionList} /> } />
            <Route exact path="/404" component= {PageNotFound} />

            <Route exact path="/edit" component={ EditPlaylist } />

            {/* <Route exact path={"/playlists/" + this.state.collections.} component={} /> */}

            <Route exact path="/playlists/new" component={ NewCollection } />

            <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
              <Route exact path="/playlist/play/:id" component={ PlaylistPlayer } />  
            </CSSTransition>
            

          </Switch>
        </div>
      </Router>
    )
  }
};
  
export default App;
