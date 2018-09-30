import React from "react";
import { Link } from "react-router-dom";
import "./controls.css";

const EditButton = props => {

    const editPlaylistUrl = `/edit/${props.playlistId}`;

    return (
        <Link to={editPlaylistUrl}>
            <button className="squirrel-btn squirrel-blue-btn">Edit Playlist</button>  
        </Link>
    )
}

export default EditButton;
