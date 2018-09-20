import React from "react";
import {Redirect} from "react-router-dom";

export default ( { match: {params: {id} } }) => {
    
    const goodId = parseInt(id);

    if (goodId != 0 && !goodId) {
        return (
            <Redirect to = {{ pathname: "/404"}} />
        )
    }
    
    return (
        <h1>{goodId}</h1>
    );
};
