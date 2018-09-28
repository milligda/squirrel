import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import API from "../../../utils/API";
// import Form from "../../partials/Form/";
import Header from "../../partials/Header";
import RecentlySaved from "../../partials/RecentlySaved";


const NewPlaylist = (
    <div className="new-playlist">
        < Header />
        <div className="new-playlist-container">
            <h1>New Playlist</h1>
            {/* <Form /> */}
            <RecentlySaved />
            {/* Need to add a way to check boxes on RecentlySaved */}
        </div>
    </div>
    
);

export default NewPlaylist;