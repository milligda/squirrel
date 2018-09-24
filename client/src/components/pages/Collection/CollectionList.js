import React from "react";
import BreadcrumbMenu from "../../partials/BreadcrumbMenu";

export const Playlist = ( props ) => {
    
    return (
        <div>
            <BreadcrumbMenu />
            <h2>Playlists</h2>
            <ul className="list-group">{props.children}</ul>

            {/* <ShareBtn>
            <EditMenu>
            <ReorderMenu> */}
        </div>
        
    );
};

