import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => (
    <div className="header-container sticky">
        <Link to="/">
            <img className="home-icon" src="assets/images/icon_tail.svg" alt="Home Icon"></img>
            <p id="link-home">Squirrel</p>
        </Link>

    </div>
)

export default Header;
