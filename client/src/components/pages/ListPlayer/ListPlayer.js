import React, { Component } from "react";
import API from "../../../utils/API";
import PlayerBackground from "../../partials/PlayerBackground";
import VideoPlayer from "../../partials/VideoPlayer";
import { ControlsContainer, NextVideoButton } from "../../partials/Controls";
import ReturnButton from "../../assets/images/return-icon.svg";
import "./listPlayer.css";

class ListPlayer extends Component {
  state = {
    currentVideo: {},
    nextVideo: {},
    videoPlaying: 0,
    playingLastVideo: false,
    playlistId: "",
    videos: []
  };

  componentDidMount = () => {
    this.getPlaylistData();
  };

  getPlaylistData = () => {
    API.getPlaylistData(this.props.match.params.id)
      .then(res => {
        console.log("Playlist Data: ", res.data);
        this.setState({
          videos: res.data.videos
        });
        this.setVideo(0);
      })
      .catch(err => console.log(err));
  };

  setVideo = videoNumber => {
    // set the lastVideo to false
    let lastVideo = false;
    let nextVideo;

    // if the current video number is the last item in the videos array, set lastVideo to true
    if (videoNumber + 1 > this.state.videos.length - 1) {
      lastVideo = true;
    }

    // if this is not the last video, store the next Video
    if (!lastVideo) {
      nextVideo = this.state.videos[videoNumber + 1];
    }

    // update the state
    this.setState({
      currentVideo: this.state.videos[videoNumber],
      playingLastVideo: lastVideo,
      nextVideo: nextVideo
    });

    console.log(this.state);
  };

  nextVideo = () => {
    let videoNum = this.state.videoPlaying + 1;

    // update the VideoPlaying number
    this.setState({
      videoPlaying: videoNum
    });

    // update the Current Video using the setVideo method
    this.setVideo(videoNum);
  };

  backButtonClick = () => {
    this.props.history.goBack();
  };

  render() {
    let nextButton;

    if (!this.state.playingLastVideo) {
      nextButton = <NextVideoButton onClick={() => this.nextVideo()} />;
    } else {
      nextButton = "";
    }

    return (
      <div id="video-page-container">
        <PlayerBackground>
          <VideoPlayer video={this.state.currentVideo} />
          <ControlsContainer>
            <img
              className="controls-button"
              src={ReturnButton}
              onClick={this.backButtonClick}
            />
            {nextButton}
          </ControlsContainer>
        </PlayerBackground>
      </div>
    );
  }
}

export default ListPlayer;
