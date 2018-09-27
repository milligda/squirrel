import React from "react";
import "./playlistTile.css";

const PlaylistTile = (props) => (
<div className="tile">
    <div className="playlist-id">
      <p>{props.title}</p>
    </div>
</div>
)

export default PlaylistTile;