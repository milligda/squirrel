import React from "react";
import "./videoPlayer.css";

const VideoPlayer = props => {
  // store the video object
  const videoObj = props.video;

  // create the embed url variables
  let url;
  let className;

  switch (videoObj.videoPlatform) {
    case "youtube":
      url = `https://www.youtube.com/embed/${videoObj.videoId}?autoplay=1&modestbranding=1`;
      className = "video-frame";
      break;
    case "vimeo":
      url = `https://player.vimeo.com/video/${videoObj.videoId}?autoplay=1&fun=0`;
      className = "video-frame";
      break;
    case "nytimes":
      url = `https://www.nytimes.com/video/players/offsite/index.html?videoId=${videoObj.videoId}`;
      className = `video-frame ${videoObj.videoPlatform}-container`;
      break;
    case "imdb":
      url = `https://www.imdb.com/videoembed/${videoObj.videoId}?autoplay=true`;
      className = `video-frame ${videoObj.videoPlatform}-container`
    default:
      url = "NaN";
  }

  return (
    <div className="video-player-container">
      <iframe className={className} src={url} allowFullScreen scrolling="no" />
      <div className="controls-container" />
    </div>
  );
};

export default VideoPlayer;
