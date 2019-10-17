//import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const DASHBOARD_LOADING_START = "DASHBOARD_LOADING_START";
export const DASHBOARD_LOADING_SUCCESS = "DASHBOARD_LOADING_SUCCESS";
export const DASHBOARD_LOADING_FAILURE = "DASHBOARD_LOADING_FAILURE";
export const APPEND_SONGLIST = "APPEND_SONGLIST";
export const getDashboard = song => async dispatch => {
    console.log(song);
    dispatch({ type: DASHBOARD_LOADING_START, payload: song });
    const { data } = await axiosWithAuth().get(`/tracks/recs/${song.track_id}`)
    let trackList = data.map(track => ({...track, track_id: track.trackid, duration_ms: track.duration }))
    dispatch({ type: DASHBOARD_LOADING_SUCCESS, payload: trackList })
}

