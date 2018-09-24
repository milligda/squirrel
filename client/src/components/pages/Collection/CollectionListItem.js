import React from "react";

const PlaylistListItem = (props) => (
    <li className="list-group-item">
        <p>Playlist {props.key}</p>
        <p>{props.key}</p>
        <p>{props.description}</p>
        <p>{props.title}</p>
        <p>{props.videos}</p>
    </li>
)

// On Playlist + id click, 
// import {Redirect} from "react-router-dom";
// return (
//     <Redirect to = {{ pathname: "/Playlists/" + id}} />
// )


export default PlaylistListItem;