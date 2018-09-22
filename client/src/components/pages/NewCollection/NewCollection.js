import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import API from "../../../utils/API";
import Form from "../../partials/Form";
import RecentlySaved from "../../partials/RecentlySaved";


const NewCollection = (
    <div>
        <Form />
        <RecentlySaved />
        {/* Need to add a way to check boxes on RecentlySaved */}
    </div>
);

export default NewCollection;