import React from "react";
import { Link } from "react-router-dom";
import { DeleteIcon } from "../Controls";
import "./tiles.css";


const PlaylistTile = props => {
  const playlistUrl = `/playlist/${props._id}`;
  let removeButton;

  return (
    <div className="playlist-tile-container">

      <Link to={playlistUrl}>
        <div className="playlist-tile">

          <h3 className="playlist-tile-title">{props.title}</h3>

        </div>
      </Link>

    </div>
  );
};

export default PlaylistTile;
