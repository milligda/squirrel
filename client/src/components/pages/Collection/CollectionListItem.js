import React from "react";
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import { Link } from "react-router-dom";
import "./collection.css";


const CollectionListItem = (props) => (
    <div className="playlist-card">
        < Link to={"/playlists/"+ props.id}>
        <li className="playlist-item">
            <p>{props.title}</p>
            <p>{props.videos}</p>
            {/* <button type="button">Edit</button> */}
        </li>
        </ Link>
    </div>
);

export default CollectionListItem;