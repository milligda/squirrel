import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import "./EditPlaylist.css";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Input } from "../../partials/Form";
import Rename from "../../partials/Rename/Rename.js";
import GridContainer from "../../partials/Tiles/PlaylistGridContainer";
import { SaveIcon } from "../../partials/Controls";
// import { EventEmitter } from "events";


const SortableItem = SortableElement(({ value }) => (
  <li className="sortable-item">{value}</li>
));


const SortableList = SortableContainer(({ videos }) => {
  return (
    <div>
      <h2>Drag Videos to Reorder:</h2>
      <ul>
        {videos.map((item, index) => (
          <SortableItem key={item._id} index={index} value={item.title} />
        ))}
      </ul>
    </div>
  );
});

class EditPlaylist extends Component {
  state = {
    redirect: null,
    title: "",
    public: null,
    isAllVideos: null,
    videos: []
  };

  componentDidMount() {
    console.log("ID: " + this.props.match.params.id);
    this.getPlaylistData();
  }

  getPlaylistData = () => {
    API.getPlaylist(this.props.match.params.id)
      .then(res => {
        console.log("get videos: ", res.data.private);
        console.log("PUBLIC STATE: ", this.state.public);

        this.setState({
          videos: res.data.videos,
          title: res.data.title,
          public: !res.data.private
        });
        console.log("get videos: ", res.data.private);
        console.log("PUBLIC STATE: ", this.state.public);

        // determine if this is the All Videos playlist
        if (res.data.title === "All Videos") {
          this.setState({ isAllVideos: true });
        } else {
          this.setState({ isAllVideos: false });
        }

        console.log("map: ", this.state.videos);
      })
      .catch(err => console.log(err));
  };

  handleToggleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    console.log("Public? :", this.state.public);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      videos: arrayMove(this.state.videos, oldIndex, newIndex)
    });
  };

  updatePlaylist = event => {
    event.preventDefault();

    // create an empty array for the video IDs
    let videoIdArr = []

    this.state.videos.forEach(video => {
      videoIdArr.push(video._id)
    });

    // create an object with the updated information
    const playlistDataObj = {
      title: this.state.title,
      private: !this.state.public,
      videos: videoIdArr
    }

    API.updatePlaylist(this.props.match.params.id, playlistDataObj)
    .then(res => this.setState({ redirect: true }))
    .catch(err => console.log(err));
  }
  
  render() {

    let switchName;

    // set the switchName based on the state
    if (this.state.public) {
      switchName = "Public";
    } else {
      switchName = "Private";
    };

    if (this.state.redirect) {
      return <Redirect to="/home" />;
    } else {
      return (
        <div className="edit-page">
          <Header />
          <div className="page-container reorder-container container">
            <h1 className="center-title">Editing "{this.state.title}" Playlist</h1>

            <div className="centered-container">
            <div className="privacy-toggle">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={switchName==="Public" ? true : false}
                      onChange={this.handleToggleChange("public")}
                      value="public"
                    />
                  }
                  label={switchName}
                />
              </FormGroup>
            </div>

            <div className="rename-container">

              {!this.state.isAllVideos ? 
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder={this.state.title}
                /> 
              : ""} 
            </div>
            
            <div className="sort-videos-container">
              <SortableList
                videos={this.state.videos}
                onSortEnd={this.onSortEnd}
              />
            </div>
            
            </div>

            

            <SaveIcon onClick={this.updatePlaylist} />
          </div>
        </div>
      );
    }
  }
}

export default EditPlaylist;
