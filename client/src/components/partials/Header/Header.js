import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/icon_tail.svg";

const Header = (props) => (
    <div className="header">
        <div className="header-container">
        </div>
        <Link to="/home">
            <div className="header-icon">
                <img className="home-icon" src={Logo} alt="Home Icon"></img>
            </div>
        </Link>
    </div>    
)

export default Header;
