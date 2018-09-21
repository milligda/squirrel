import React, { Component } from "react";
import {Redirect } from "react-router-dom";
import API from "./API";


class Logout extends Component {

    state = {
        loggedIn: this.loggedIn
    }

    logout = () => {
        API.logout()
        .then(res => {
            console.log(res);
            this.setState({
                loggedIn: false
            })
        })
        .catch(err => console.log(err));
    }

    componentDidMount = () => {
        this.logout();
    }

    render() {
        if (!this.state.loggedIn) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <h1>You are currently being logged out</h1>
            </div>
        )
    }
}

export default Logout;
