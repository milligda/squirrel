import React from "react";
import BreadcrumbMenu from "../../partials/BreadcrumbMenu";

export const CollectionList = ( props ) => {
    
    return (
        <div>
            <BreadcrumbMenu />
            <h2>Collections</h2>
            <ul className="list-group">{props.children}</ul>

            {/* <ShareBtn>
            <EditMenu>
            <ReorderMenu> */}
        </div>
        
    );
};

