import React, { Component } from "react";
import "./videoPlayer.css";

const VideoPlayer = props => {

    // store the video object
    const videoObj = props.video;

    // create the embed url and parameters variables
    let url;

    switch(videoObj.videoPlatform) {
        case "youtube":
            url = `https://www.youtube.com/embed/${videoObj.videoId}?autoplay=1&modestbranding=1`;
            break;
        case "vimeo":
            url = `https://player.vimeo.com/video/${videoObj.videoId}?autoplay=1&fun=0`;
            break;
        default:
            url= "NaN";
    }

    return (

        <div className="video-player-container">
            <iframe className="video-frame" src={url} allowFullScreen />
            <div className="controls-container">
                
            </div>
        </div>
    );
    
  
};

export default VideoPlayer;
