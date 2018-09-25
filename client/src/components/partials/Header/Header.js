import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import "./header.css";

const Header = () => (
    <div className="header-container sticky">

    {/* {if(route="/") ? <Login/>: null } */}

        <Link to="/">
            <div className="header-icon">
                <img className="home-icon" src="assets/images/icon_tail.svg" alt="Home Icon"></img>
                <p id="link-home">Squirrel</p>
            </div>
        </Link>

    </div>
)

export default Header;
