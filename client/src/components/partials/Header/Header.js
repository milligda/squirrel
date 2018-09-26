import React from "react";
import { Link } from "react-router-dom";
import Login from "../Login";
import "./header.css";
import Logout from "../../../utils/Logout";
import Logo from "../../assets/images/icon_tail.svg";

const Header = (props) => (
    <div className="header-container sticky">

    {/* { res.data.loggedIn ? <Logout/>: <Login /> } */}

        <Link to="/">
            <div className="header-icon">
                <img className="home-icon" src={Logo} alt="Home Icon"></img>
                <p id="link-home">Squirrel</p>
                {/* {props.children} */}
            </div>
        </Link>

        

    </div>
)

export default Header;
