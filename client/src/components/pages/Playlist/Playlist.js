import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import API from "../../../utils/API";
import Header from "../../partials/Header";
import { VideoTile, GridContainer } from "../../partials/Tiles";
import { EditButton, PlayButton } from "../../partials/Controls";
import ListPlayer from "../ListPlayer";
import "./playlist.css";

class Playlist extends Component {
    state = {
        ownerId: null,
        playlistId: this.props.match.params.id,
        title: null,
        userId: null,
        isOwner: true,
        isPrivate: false,
        showPage: true,
        showPlayer: false,
        duration: 1000,
        dataLoaded: false,
        videos: []
    }

    componentDidMount = () => {
        if (!this.state.dataLoaded) {
            this.getUser();
        }
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
        API.getPlaylistData(this.state.playlistId)
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
            this.setState({ 
                isOwner: false,
                dataLoaded: true
            });
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

    startPlayer = () => {
        this.setState({
            showPage: !this.state.showPage
        });
        setTimeout(() => {
            this.setState({
                showPlayer: !this.state.showPlayer
            });
        }, this.state.duration);
    }

    endPlayer = () => {
        this.setState({
            showPlayer: !this.state.showPlayer
        });
        setTimeout(() => {
            this.setState({
                showPage: !this.state.showPage
            });
        }, this.state.duration);
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

                    <CSSTransition
                        in={ this.state.showPage }
                        timeout={this.state.duration}
                        classNames="fade"
                        mountOnEnter
                        unmountOnExit
                    >
                        <div className="playlist-data-container">
                            <Header />
                            <div className="page-container playlist-container">
                                <h1 className="page-title center-title">{this.state.title}</h1>

                                <div className="playlist-controls">
                                    <PlayButton startPlayer={this.startPlayer} />

                                    {this.state.isOwner ? 
                                        <EditButton 
                                            playlistId={this.props.match.params.id}
                                        /> 
                                    : ""}
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
                    </CSSTransition>

                    <CSSTransition
                        in={ this.state.showPlayer }
                        timeout={this.state.duration}
                        classNames="fade"
                        mountOnEnter
                        unmountOnExit
                    >
                        <ListPlayer 
                            videos={this.state.videos} 
                            endPlayer={this.endPlayer}
                        />
                    </CSSTransition>
                </div>  

                
            )

        }

        

    }    
}

export default Playlist;
