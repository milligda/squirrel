import React from "react";
import { Link } from "react-router-dom";
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { withRouter } from "react-router-dom";
import "./playlists.css";


const PlaylistListItem = props => {
    
    const playlistUrl = `/playlist/${props.id}`;
    
    return (
        <Link to={playlistUrl}>
            <div className="playlist-card">
                
                <li className="playlist-item">
                    <p>{props.title}</p>
                </li>
                
            </div>
        </Link>
    );
}

export default PlaylistListItem;