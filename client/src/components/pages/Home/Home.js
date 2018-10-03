import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import RecentVideos from "../../partials/RecentVideos";
import API from "../../../utils/API";
import { PlaylistGridContainer, PlaylistTile } from "../../partials/Tiles";
import Loading from "../../partials/Loading";
import "./home.css";
import Header from "../../partials/Header";


class Home extends Component {
  state = {
    loggedIn: null,
    userId: null,
    playlistsLoaded: false,
    firstTime: true,
    playlists: []
  };

  componentDidMount = () => {
    this.getUser();
    this.getPlaylists();
    this.setCookie();
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
        localStorage.setItem('squirrelId', res.data.userId);
      })
      .catch(err => console.log(err));
  };


  render() {

    let welcomeMessage;

    if (this.state.firstTime) {
      welcomeMessage = <div className="welcome-message"> <h1>Welcome to Squirrel!</h1> <h2>Add videos, create playlists, and watch when you're ready!</h2> </div>;
    } else {
      welcomeMessage = <div className="welcome-message"><h1>Welcome Back!</h1></div>;
    }

    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    } else if (this.state.loggedIn === null) {
      return <Loading />;
    }

    if (this.state.loggedIn === true) {

      return (
        <div className="home-page">
          < Header />
          <div className="page-container home-container">
            {welcomeMessage}

            <div className="add-videos-container">
              <h2>Squirrel Away Videos:</h2>

              <Link to="/video/add">
                <button className="squirrel-btn squirrel-red-btn">Add Video</button>
              </Link>

              <a href="https://chrome.google.com/webstore/detail/squirrel/ddfnjccdalikdhoaelepmoldpgookabe">
                <button className="squirrel-btn squirrel-red-btn">Get Chrome Extension</button>
              </a>
            </div>
            
            <div className="playlists-menu">
              <h2>Your Playlists:</h2>

              <PlaylistGridContainer>

                <PlaylistTile 
                  title="+"
                  _id="create"
                  className="playlist-tile-content create-playlist-tile"
                />
                
                {this.state.playlistsLoaded ? 
                  this.state.playlists.map(playlist => (
                    <PlaylistTile
                      _id={playlist._id}
                      key={playlist._id}
                      title={playlist.title}
                      deletePlaylist={this.deletePlaylist}
                      className="playlist-tile-content"
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
