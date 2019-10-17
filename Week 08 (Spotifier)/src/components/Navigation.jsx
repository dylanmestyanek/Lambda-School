import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions'

const Navigation = (props) =>{
    return (
        <nav className="navigation">
            <Link to="/dashboard/"><div className="logo">
                <i className="fab fa-spotify fa-1x"></i><h2> Spotifier</h2>
            </div></Link>
                {localStorage.getItem('token')&&<div className="navigation-links">
                <Link to="/dashboard/">Dashboard</Link>
                <Link to="/dashboard/saved/">Saved Songs</Link>
                <button style={{cursor: 'pointer'}} onClick={() => { 
                    props.logout()
                    window.localStorage.removeItem('token')
                    props.history.push('/')
                }}
                >Logout</button>
            </div>}
        </nav>
    );
};

export default connect((state) => ({...state}), { logout })(Navigation);