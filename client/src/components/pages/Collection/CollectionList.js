import React from "react";
// This is the page which will render for each collection. 
// It will contain the list of videos

export default ( props ) => {
    
    return (
        <div>
            <h2>Collections</h2>
            <ul className="list-group">{props.children}</ul>
        </div>
        
    );
};

