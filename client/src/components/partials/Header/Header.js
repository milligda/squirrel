import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import "./header.css";
// import Logout from "../../../utils/Logout";

const Header = () => (
    <div className="header-container sticky">

    {/* { if(user logged in) ? <Login/>: null, <Logout />} */}
        {/* <Login /> */}

        <Link to="/">
            <div className="header-icon">
                <img className="home-icon" src="assets/images/icon_tail.svg" alt="Home Icon"></img>
                <p id="link-home">Squirrel</p>
            </div>
        </Link>

        {/* <Login />

        <Link to="/logout">
        Log out
        </Link> */}

    </div>
)

export default Header;
