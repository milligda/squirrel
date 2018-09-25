import React from "react";

const CollectionListItem = (props) => (
    <div>
        <li className="list-group-item">
            <p>Playlist </p>
            {/* <p>{props.id}</p> */}
            <p>{props.description}</p>
            <p>{props.title}</p>
            <p>{props.videos}</p>
        </li>
    </div>
    
);

export default CollectionListItem;