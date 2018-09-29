import React from "react";
import "./controls.css";
import NextVideoIcon from "../../assets/images/next-video-icon.svg";


const NextVideoButton = props => (
    <img className="controls-button" src={NextVideoIcon} alt="next video button" {...props} />
);

export default NextVideoButton;
