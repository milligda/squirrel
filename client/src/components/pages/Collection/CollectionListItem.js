import React from "react";
// import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import "./collection.css";


const CollectionListItem = (props) => (
    <div className="playlist-card">
        <li className="playlist-item">
            <p>{props.title}</p>
            
            <button type="button">Edit</button>
        </li>
    </div>
);

export default CollectionListItem;