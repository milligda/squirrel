import React, { Component } from "react";
import Header from "../../partials/Header"
import "./restricted.css";

class Restricted extends Component {
    render() {
        return (

            <div className="restricted-page">
                < Header />
                <div className="page-container restricted-container">   
                    <h1>Restricted</h1>
                    <h2>Unfortunately you do not have access to this page.</h2>
                </div>
            </div>
            
        );
    }
}

export default Restricted;
