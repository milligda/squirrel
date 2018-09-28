import React from "react";
import { Link } from "react-router-dom";
import Truncate from "../../../utils/Truncate";
import { DeleteIcon } from "../Controls";
import "./tiles.css";


const VideoTile = props => {
  const videoUrl = `/video/${props._id}`;
  const truncatedTitle = Truncate(props.title);
  let removeButton;

  if (props.isOwner === true) {
    removeButton = <DeleteIcon onClick={() => props.removeVideo(props._id)} />
  }

  return (
    <div className="tile-container">
      <div className="video-tile">

        <Link to={videoUrl}>
          <div className="tile-public">
            <img className="video-tile-image" src={props.imageUrl} />
            <p className="video-tile-title">{truncatedTitle}</p>
          </div>
        </Link>

        {removeButton}
      </div>
    </div>
  );
};

export default VideoTile;
