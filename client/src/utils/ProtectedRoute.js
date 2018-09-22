import React from "react";
import {Route, Redirect } from "react-router-dom";


const ProtectedRoute = (props) => {

    const loggedIn = props.loggedIn;

    return (
        loggedIn ? 
        <Route path={props.path} component={props.component} />
        :
        <Redirect to="/restricted" />
    )
}

export default ProtectedRoute;
