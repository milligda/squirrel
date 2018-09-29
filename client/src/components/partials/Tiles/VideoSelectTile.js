import React from "react";
import Truncate from "../../../utils/Truncate";
import "./tiles.css";


const VideoSelectTile = props => {
  const truncatedTitle = Truncate(props.title);

  let videoTileClass = 'video-tile';

  if (props.selected) {
    videoTileClass = `video-tile selected-tile`;
  }

  return (
    <div className="tile-container">
      <div className={videoTileClass}>

        <div className="video-tile-content">
          
            <div className="tile-public">
              <img className="video-tile-image" src={props.imageUrl} alt={props.title} />
            </div>

        </div>
        <div className="video-tile-overlay" onClick={() => props.selectVideo(props.index)}>
          <p className="video-tile-title">{truncatedTitle}</p>
        </div>  
      </div>
    </div>
  );
};

export default VideoSelectTile;
