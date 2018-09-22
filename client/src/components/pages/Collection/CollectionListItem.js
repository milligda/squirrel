import React from "react";

const CollectionListItem = (props) => (
    <li className="list-group-item">
        <p>Collection {props.key}</p>
        <p>{props.key}</p>
        <p>{props.description}</p>
        <p>{props.title}</p>
        <p>{props.videos}</p>
    </li>
)

// On collection + id click, 
// import {Redirect} from "react-router-dom";
// return (
//     <Redirect to = {{ pathname: "/collections/" + id}} />
// )


export default CollectionListItem;