import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Dropdown from "../../partials/Dropdown";
import { Input } from "../../partials/Form";
import Loading from "../../partials/Loading";
import Header from "../../partials/Header";
import "./addVideo.css";
import Notifier, { openSnackbar } from '../../Notifier';

class AddVideo extends Component {
  state = {
    loggedIn: null,
    userId: null,
    url: "",
    playlist: []
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
    console.log("id: " + id);
    console.log("key: " + key);
    let temp = [...this.state[key]];
    console.log("temp: ");
    console.log(temp);
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
        openSnackbar({ message: res.data });
        this.setState({
          url: "",
          playlist: [],
        })
      });
    }
  };

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/restricted" />;
    } else if (this.state.loggedIn === null) {
      return <Loading />;
    } else {
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
              <Notifier />
              <button className="squirrel-btn squirrel-blue-btn" onClick={this.handleFormSubmit}>Add Video</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AddVideo;
