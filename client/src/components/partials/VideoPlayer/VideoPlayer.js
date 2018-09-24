import React, { Component } from "react";
import "./videoPlayer.css";

const VideoPlayer = props => {

    // store the video object
    const videoObj = props.video;

    // create the embed url variable
    let url;

    switch(videoObj.videoPlatform) {
        case "youtube":
            url = `https://www.youtube.com/embed/${videoObj.videoId}?autoplay=1&modestbranding=1`
            break;
        default:
            url= "NaN";
    }

    return (

        <div className="video-player-container">
            <h1>{videoObj.title}</h1>
            <h2>{videoObj.url}</h2>
            <iframe className="video-frame" src={url}/>
        
        </div>
    );
    
  
};

export default VideoPlayer;
