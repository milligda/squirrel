import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
