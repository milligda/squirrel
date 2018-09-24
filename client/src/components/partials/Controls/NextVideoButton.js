import React from "react";
import "./controls.css";
import NextVideoIcon from "../../assets/images/next-video-icon.svg";


const NextVideoButton = props => (
    <img className="controls-button" src={NextVideoIcon} {...props} />
);

export default NextVideoButton;
