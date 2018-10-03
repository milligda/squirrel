import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
// import RecentVideos from "../../partials/RecentVideos";
import API from "../../../utils/API";
import { PlaylistGridContainer, PlaylistTile, GridContainer, VideoTile } from "../../partials/Tiles";
import Loading from "../../partials/Loading";
import Header from "../../partials/Header";
import "./home.css";

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
        this.getUserData(res.data.userId);
        // this.getPlaylists();
      })
      .catch(err => console.log(err));
  };

  getUserData = (userId) => {
    API.getUserData(userId)
      .then(res => {
        console.log(res);
        this.setState({
          playlists: res.data.playlists,
          playlistsLoaded: true
        });
        console.log(this.state);
        this.firstTimeUser();
      })
      .catch(err => console.log(err));
  };

  // getPlaylists = () => {
  //   API.getPlaylist(this.state.userId)
  //     .then(res => {
  //       console.log("get playlists: ", res.data);
  //       this.setState({
  //         playlists: res.data,
  //         playlistsLoaded: true
  //       });
  //       console.log(this.state.playlists);
  //       this.firstTimeUser();
  //     })
  //     .catch(err => console.log(err));
  // };

  deletePlaylist = playlistId => {
    API.removePlaylist(playlistId, this.state.userId)
      .then(res => this.getPlaylists())
      .catch(err => console.log(err));
  };

  removeVideo = (videoId) => {
    API.deleteVideo(videoId)
    .then(res => this.getPlaylists())
    .catch(err => console.log(err));
  }

  setCookie = () => {
    API.setCookie()
      .then(res => {
        console.log("userID: ", res.data.userId);
        localStorage.setItem("squirrelId", res.data.userId);
      })
      .catch(err => console.log(err));
  };

  firstTimeUser = () => {
    // the first playlist will be All Videos - if 0, display the first Time message
    console.log(this.state.playlists);
    if (this.state.playlists[0].videos.length > 0) {
      this.setState({
        firstTime: false
      });
    }
  };

  render() {
    let welcomeMessage;
    let videoCollectionMessage;

    // If the user does not have any videos, display a different Welcome Message and Video Collection message
    if (this.state.firstTime) {
      welcomeMessage = (
        <div className="welcome-message">
          {" "}
          <h1>Welcome to Squirrel!</h1>{" "}
          <h2>Add videos, create playlists, and watch when you're ready!</h2>{" "}
        </div>
      );
      videoCollectionMessage = "Your collection is empty. Start squirreling away videos...";
    } else {
      welcomeMessage = (
        <div className="welcome-message">
          <h1>Welcome Back!</h1>
        </div>
      );
      videoCollectionMessage = ""
    }

    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    } else if (this.state.loggedIn === null) {
      return <Loading />;
    }
    if (this.state.loggedIn === true) {
      return (
        <div className="home-page">
          <Header />
          <div className="page-container home-container">
            {welcomeMessage}

            <div className="add-videos-container">
              <h2>Squirrel Away Videos:</h2>

              <Link to="/video/add">
                <button className="squirrel-btn squirrel-red-btn">
                  Add Video
                </button>
              </Link>

              <a href="https://chrome.google.com/webstore/detail/squirrel/ddfnjccdalikdhoaelepmoldpgookabe">
                <button className="squirrel-btn squirrel-red-btn">
                  Get Chrome Extension
                </button>
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

                {this.state.playlistsLoaded
                  ? this.state.playlists.map(playlist => (
                      <PlaylistTile
                        _id={playlist._id}
                        key={playlist._id}
                        title={playlist.title}
                        deletePlaylist={this.deletePlaylist}
                        className="playlist-tile-content"
                      />
                    ))
                  : ""}
              </PlaylistGridContainer>
            </div>

            <div className="videos-menu">
              <h2>Your Video Collection:</h2>
              <h3>{videoCollectionMessage}</h3>

              <GridContainer>
                {this.state.playlistsLoaded
                  ? this.state.playlists[0].videos.map(video => (
                    <VideoTile 
                      isOwner={true}
                      imageUrl={video.imageUrl}
                      title={video.title}
                      key={video._id}
                      _id={video._id}
                      removeVideo={this.removeVideo}
                    />
                  ))
                : ""}
              </GridContainer>

            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
