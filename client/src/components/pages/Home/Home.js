import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../../utils/API";
import { PlaylistList, PlaylistListItem } from "../Playlist";



class Home extends Component {
  state = {
    loggedIn: true,
    userId: null
  };

  componentDidMount = () => {
    this.getUser();
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
  };

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        
        <h1>Welcome to your home page!</h1>
        <h2>Hello user {this.state.userId}</h2>

        <Link to="/video/1">
          <p className="sql-btn">Video Player</p>
        </Link>

        <Link to="/playlist/play/1">
          <p className="sql-btn">Playlist Player</p>
        </Link>

        {/* <div>
          <PlaylistList>
          {this.state.Playlists.map(Playlist => {
              return (
              <PlaylistListItem
                  key={Playlist.userId}
                  description={Playlist.description}
                  title={Playlist.title}
                  videos={Playlist.videos}
              />
              );
          })}
          </PlaylistList>
          </div> */}
      </div>
    );
  }
}

export default Home;
