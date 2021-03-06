import React from "react";
import RemoveIcon from "../../assets/images/icon_remove.svg";
import "./controls.css";

const DeleteIcon = props => (
    <div className="delete-icon" {...props}>
        <img src={RemoveIcon} alt="delete button" />
    </div>
);

export default DeleteIcon;
