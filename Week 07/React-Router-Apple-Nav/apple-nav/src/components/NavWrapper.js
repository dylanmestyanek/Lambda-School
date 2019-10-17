import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";

import Nav from "./Nav";
import Page from "./Page";

const NavWrapper = ({ data }) => {
    const [title, setTitle] = useState('');

    return (
        <div className="nav-container">
            <div className="nav-link-container">
            <NavLink to="/" className="apple-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/768px-Apple_logo_white.svg.png" /></NavLink>
                {
                    data.map((item, idx) => <Nav setTitle={setTitle} title={item.title} />)
                }
            </div>

            <Route exact path="/:title" render={(props) => <Page {...props} data={data} />} />


        </div>
    )
}

export default NavWrapper;
