import React from "react";
import { Link } from "react-router-dom";

const BreadcrumbMenu = (props) => (
    <div>
        <Link to="/"> Home > </ Link> {props.title}
    </div>
);

export default BreadcrumbMenu;