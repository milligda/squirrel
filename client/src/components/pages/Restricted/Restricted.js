import React, { Component } from "react";
import Header from "../../partials/Header"

class Restricted extends Component {
    render() {
        return (
            <div className="restricted-container">
                < Header />
                <div className="msg container">
                    <h1>Restricted</h1>
                </div>
            </div>
        );
    }
}

export default Restricted;
