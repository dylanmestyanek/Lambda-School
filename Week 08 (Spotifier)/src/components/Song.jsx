import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDashboard, deleteFromSaved } from '../store/actions'

const Song = props =>{

    const { song } = props;

    return(
        <div className="song">
            <p className="artist">Artist: <em>{song.artist_name}</em></p>
            <p className="track">Track: <em>{song.track_name}</em></p>
            <p className="duration">Duration: {Math.floor((song.duration_ms / 1000)/ 60)}:{song.duration_ms % 60 < 10 && "0"}{song.duration_ms % 60} </p>
            <div className="button-container">
                <Link to="/dashboard"><button onClick={() => props.getDashboard(song)} className="view-track">View Track in Dashboard</button></Link>
                <button onClick={() => props.deleteFromSaved(song)} className="remove-track">Remove Track</button>
            </div>
            
        </div>
    );
};

export default connect(state => ({...state}), { getDashboard, deleteFromSaved })(Song);