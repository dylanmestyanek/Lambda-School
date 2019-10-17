import React from "react";

const Line = ({ left }) => {

    return (
        <div 
            className="line" 
            style={{left: `${left}%`}}>
        </div>
    );
};

export default Line;