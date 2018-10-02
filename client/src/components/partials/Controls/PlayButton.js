import React from "react";
import { Link } from "react-router-dom";
import "./controls.css";

const PlayButton = (props) => {

    // const playUrl = `/playlist/play/${props.playlistId}`;

    return (
        <button onClick={() => props.startPlayer()} className="squirrel-btn squirrel-red-btn">Play All</button>
    )
}

export default PlayButton;
