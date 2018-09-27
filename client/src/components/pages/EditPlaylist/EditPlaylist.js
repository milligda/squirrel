import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import API from "../../../utils/API";


class EditPlaylist extends Component {

    state = {
        videos: []
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <div>
               <h1>Edit Playlist Page</h1> 
            </div>
        )
    }
}

export default EditPlaylist;