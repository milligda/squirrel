import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../../utils/API";
import { PlaylistGridContainer, PlaylistTile } from "../../partials/Tiles";
import "./home.css";
import RecentlySaved from "../../partials/RecentlySaved/RecentlySaved.js";
import Header from "../../partials/Header";


class Home extends Component {
  state = {
    loggedIn: null,
    userId: null,
    playlistsLoaded: false,
    playlists: []
  };

  componentDidMount = () => {
    this.getUser();
    this.getPlaylists();
    this.setCookie();
    console.log("console did mount");
  };

  getUser = () => {
    API.getUserStatus()
      .then(res => {
        console.log("getUser: ", res);
        this.setState({
          loggedIn: res.data.loggedIn,
          userId: res.data.userId
        });
      })
      .catch(err => console.log(err));
  };

  getPlaylists = () => {
    API.getPlaylists()
    .then(res => {
      console.log("get playlists: ", res.data);
      this.setState({
        playlists: res.data,
        playlistsLoaded: true
      });
      console.log(this.state.playlists)
    })
    .catch(err => console.log(err));
  };

  deletePlaylist = (playlistId) => {
    API.removePlaylist(playlistId, this.state.userId)
      .then(res => this.getPlaylists())
      .catch(err => console.log(err));
  }

  setCookie = () => {
    API.setCookie()
      .then(res => {
        console.log("userID: ", res.data.userId);
  
        // document.cookie = ({'userId': res.userId,  maxAge: 2592000000});  // Expires in one month    
        // res.json();
        localStorage.setItem('squirrelId', res.data.userId);
    
        // this.setState({
        //   loggedIn: res.data.loggedIn,
        //   userId: res.data.userId
        // });
      })
      .catch(err => console.log(err));
  };


  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    } else if (this.state.loggedIn === null) {
      return (<div></div>)
    }

    if (this.state.loggedIn === true) {

      return (
        <div className="home-container">
          < Header />
          <div className="home-content-container content">
            <h1>Welcome!</h1>
            <h2>Here's everything you've squirreled away so far.</h2>
  
            <Link to="/playlist/create">
              <button className="squirrel-btn squirrel-blue-btn">New Playlist</button>
            </Link>
  
            <Link to="/video/add">
              <button className="squirrel-btn squirrel-blue-btn">Add Video</button>
            </Link>
  
            <RecentlySaved />
  
            <div className="playlists-menu">
              <h2>Playlists</h2>

              <PlaylistGridContainer>

                <PlaylistTile 
                  title="Create New Playlist"
                  _id="create"
                  className="create-playlist-tile"
                />
                
                {this.state.playlistsLoaded ? 
                  this.state.playlists.map(playlist => (
                    <PlaylistTile
                      _id={playlist._id}
                      key={playlist._id}
                      title={playlist.title}
                      deletePlaylist={this.deletePlaylist}
                    />
                  )) : ""
                }

              </PlaylistGridContainer>
            </div>
          </div>    
        </div>
      );
      
    }
    
  }
}

export default Home;
