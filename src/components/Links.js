import React from "react";

function Links( {github, linkedin} ) {

    return (
        <div id="about">
            <h1>Links</h1>
            <a href={github}>{github}</a>
            <a href={linkedin}>{linkedin}</a>
            
        </div>
    );

}

export default Links;