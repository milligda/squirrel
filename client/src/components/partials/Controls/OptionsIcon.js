import React from "react";
import OptionsIconImage from "../../assets/images/icon_options.svg";
import "./controls.css";

const OptionsIcon = props => (
    <div className="options-icon" {...props}>
        <img src={OptionsIconImage} alt="display options" />
    </div>
);

export default OptionsIcon;
