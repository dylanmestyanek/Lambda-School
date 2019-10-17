import React, { useEffect } from "react"
import { connect } from "react-redux"

import { fetchSmurfs, removeSmurf } from "../actions"
import SmurfCard from "./SmurfCard"

const SmurfList = ({ 
    smurfs, 
    fetchSmurfs,
    removeSmurf
}) => {

    useEffect(() => {
        fetchSmurfs();
    }, [fetchSmurfs])
    
    console.log("State being passed into SmurfList:", smurfs)
    return (
        <div>
            {
                smurfs.map(smurf => {
                    return <SmurfCard key={Date.now()} smurf={smurf} removeSmurf={removeSmurf} />
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    console.log("MapState state", state)
    return {
      smurfs: state.smurfs
    }
  }

  export default connect(mapStateToProps, {fetchSmurfs, removeSmurf})(SmurfList);