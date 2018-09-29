import React, { Component } from "react";
import Header from "../../partials/Header"

class Restricted extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <h1>You do not have permission to see this page</h1>
                </div>
            </div>
        );
    }
}

export default Restricted;
