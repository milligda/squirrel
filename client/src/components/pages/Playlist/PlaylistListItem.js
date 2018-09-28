import React from "react";
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { withRouter } from "react-router-dom";
import "./playlists.css";


const PlaylistListItem = withRouter((props) => (
    <div className="playlist-card" onClick={() => props.history.push(`/playlist/${props.id}`)}>
        
        <li className="playlist-item">
            <p>{props.title}</p>
        </li>
        
    </div>
));

export default PlaylistListItem;