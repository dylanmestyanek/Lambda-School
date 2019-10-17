import React from 'react';

const Loader = props =>{
    return(
        <div className="loader-wrapper">
            <div className="loader-content">
                <div className="loader-icon"><i className="fab fa-spotify fa-1x"></i></div>
                <h2>Spotifier</h2>
                <p className="loader-message">{props.message}</p>
            </div>
            
        </div>
    );
};

export default Loader;