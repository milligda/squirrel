import React from "react";
import { Link } from "react-router-dom";
import "./controls.css";

const EditButton = (props) => {

    const editURL = `/playlist/${props.id}/edit`;

    <div className="edit-btn">
        < Link to={editURL} >
            <img src="../../assets/images/edit_btn.svg" />
        </Link>
    </div>  
}

export default EditButton;
