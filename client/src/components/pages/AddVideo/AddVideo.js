import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../../utils/API";
import Dropdown from "../../partials/Dropdown";
import { Input } from "../../partials/Form";
import Header from "../../partials/Header";
import "./addVideo.css";

class AddVideo extends Component {
  state = {
    loggedIn: true,
    userId: null,
    url: "",
    playlist: [
      {
        description: "",
        key: "playlist",
        private: true,
        selected: false,
        title: "All Videos",
        userId: "5ba999ad8f0e441ce4f8d6d2",
        videos: [],
        _id: "5ba999ad8f0e441ce4f8d6d3"
      },
      {
        description: "",
        key: "playlist",
        private: true,
        selected: false,
        title: "News Videos",
        userId: "5ba999ad8f0e441ce4f8d6d2",
        videos: [],
        _id: "5ba999ad8f0e441ce4f8d6d4"
      },
      {
        description: "",
        key: "playlist",
        private: true,
        selected: false,
        title: "Movie Clips",
        userId: "5ba999ad8f0e441ce4f8d6d2",
        videos: [],
        _id: "5ba999ad8f0e441ce4f8d6d5"
      }
    ]
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
        this.getUserData();
      })
      .catch(err => console.log(err));
  };

  getUserData = () => {
    API.getUserData(this.state.userId)
      .then(res => {
        console.log(res);
        this.setState({
          playlist: res.data.playlists
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  toggleSelected = (id, key) => {
    let temp = [...this.state[key]];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    });
    console.log(this.state);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.url) {
      let selectedPlaylists = [];

      this.state.playlist.forEach(list => {
        if (list.selected || list.title === "All Videos") {
          selectedPlaylists.push(list._id);
        }
      });

      const storeVideoObj = {
        url: this.state.url,
        playlist: selectedPlaylists
      };

      console.log(storeVideoObj);

      API.saveVideo(this.state.userId, storeVideoObj).then(res => {
        console.log(res);
      });

      // API.loginUser({
      //   username: this.state.username,
      //   password: this.state.password
      // })
      // .then(res => {
      //   console.log(res);
      //   this.setState({ url: "" });
      //   this.getUserData();
      // })
      // .catch(err => console.log(err));
    }
  };

  render() {
    if (!this.state.loggedIn) {
      return <Redirect to="/restricted" />;
    }

    return (
      <div className="add-video-page">
        <Header />

        <div className="add-video-container header-present">
          <h1 className="add-video-title">Squirrel away a video.</h1>

          <div className="centered-container">
            <div className="wrapper">
              <Dropdown
                titleHelper="Playlist"
                title="Select Playlists"
                list={this.state.playlist}
                toggleItem={this.toggleSelected}
              />
            </div>

            <Input
              value={this.state.url}
              onChange={this.handleInputChange}
              name="url"
              placeholder="Video URL"
            />

            <button className="squirrel-btn squirrel-blue-btn"onClick={this.handleFormSubmit}>Add Video</button>
          </div>
        </div>
      </div>
    );
  }
}

export default AddVideo;
