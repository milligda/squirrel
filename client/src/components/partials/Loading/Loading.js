import React from "react";
import "./loading.css";
import Spinner from "../../assets/images/icon_spinner.svg";

const Loading = () => (
    <div className="loading-page">
        <div className="spinner-container">
            <img className="spinner-icon" src={Spinner} alt="Page Loading" />
        </div>
    </div>
)

export default Loading;
