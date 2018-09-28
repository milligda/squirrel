import React from "react";
import { Link } from "react-router-dom";
import "./controls.css";

const PlayButton = (props) => {

    const playUrl = `/playlist/play/${props.playlistId}`;

    return (
        <Link to={playUrl} videos={props.videos} >
            <button className="squirrel-btn squirrel-red-btn">Play All</button>
        </Link>
    )
}

export default PlayButton;
