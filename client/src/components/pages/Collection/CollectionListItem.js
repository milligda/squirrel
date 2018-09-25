import React from "react";
import "./collection.css";

const CollectionListItem = (props) => (
    <div>
        <li className="list-group-item">
            <p>{props.title}</p>
            {/* <p>{props.description}</p>
            <p>{props.videos}</p> */}
        </li>
    </div>
    
);

export default CollectionListItem;