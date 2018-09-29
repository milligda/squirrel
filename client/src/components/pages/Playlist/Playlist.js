import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import { VideoTile, GridContainer } from "../../partials/Tiles";
import { EditButton, PlayButton } from "../../partials/Controls";
import "./playlist.css";

class Playlist extends Component {
    state = {
        ownerId: null,
        title: null,
        userId: null,
        isOwner: true,
        isPrivate: false,
        videos: []
    }

    componentDidMount = () => {
        this.getUser();
    }

    getUser = () => {
      API.getUserStatus()
      .then(res => {
        console.log("getUser: ", res);
        this.setState({
          userId: res.data.userId
        });
        this.getPlaylistData();
      })
      .catch(err => console.log(err));
    }

    getPlaylistData = () => {
        API.getPlaylistData(this.props.match.params.id)
        .then(res => {
            console.log("Playlist Data: ", res.data);
            this.setState({
                ownerId: res.data.userId[0],
                isPrivate: res.data.private,
                title: res.data.title,
                videos: res.data.videos
            });
            this.checkOwner();
        })
        .catch(err => console.log(err));
    }

    checkOwner = () => {
        if (this.state.ownerId !== this.state.userId) {
            this.setState({ isOwner: false });
        }
    }

    removeVideo = (videoId) => {
        if (this.state.title === "All Videos") {
            API.deleteVideo(videoId)
            .then(res => this.getPlaylistData())
            .catch(err => console.log(err));
        } else {
            API.removeVideo(videoId, this.props.match.params.id)
            .then(res => this.getPlaylistData())
            .catch(err => console.log(err));
        }
    }

    render() {


        // if the user is not the playlist owner and playlist is private, redirect to "restricted"
        if (!this.state.isOwner && this.state.isPrivate) {
            return <Redirect to="/restricted" />;

        // if the ownerID !== userID and playlist is public, display public view
        } else if (!this.state.isOwner) {

        // if the ownerID === userID, show everything
        } else {

            return (
                <div className="playlist-page">
                    <Header />
                    <div className="page-container playlist-container">
                        <h1 className="page-title center-title">{this.state.title}</h1>

                        <div className="playlist-controls">
                            <PlayButton 
                                playlistId={this.props.match.params.id}
                                videos={this.state.videos}
                            />
                            {/* {this.state.isOwner ? <EditButton /> : ""} */}
                        </div>

                        <GridContainer>
                            {this.state.videos.map(video => (
                                <VideoTile 
                                    isOwner={this.state.isOwner}
                                    imageUrl={video.imageUrl}
                                    title={video.title}
                                    key={video._id}
                                    _id={video._id}
                                    removeVideo={this.removeVideo}
                                />
                            ))}
                        </GridContainer>

                    </div>
                    
                </div>  
            )

        }

        

    }    
}

export default Playlist;
