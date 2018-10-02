import React from "react";
import { Link } from "react-router-dom";
import "./controls.css";
import EditIconImage from "../../assets/images/icon_edit.svg";


const EditIcon = props => {
    
    const editPlaylistUrl = `/edit/${props.playlistId}`;

    return (
        <Link to={editPlaylistUrl}>
            <div className="edit-icon">
                <img src={EditIconImage} />
            </div>  
        </Link>
        
    )
}

export default EditIcon;
