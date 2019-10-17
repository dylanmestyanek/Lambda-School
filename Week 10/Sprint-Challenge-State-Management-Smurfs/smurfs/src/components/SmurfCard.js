import React from "react"
import axios from "axios"
import { connect } from "react-dom"
import styled from "styled-components"

const SmurfCard = ({ smurf, removeSmurf }) => {
    return(
        <Card>
            <h2>Meet, {smurf.name}!</h2> 
            <p>{smurf.name} is {smurf.age} smurf years old and {smurf.height} short!</p>
            <button onClick={() => removeSmurf(smurf.id)}>Remove from Smurf Fam!</button>
        </Card>
    )
}

export default SmurfCard

const Card = styled.div`
    background: rgba(100,200, 200, .6);
    width: 60%;
    border-radius: 5px;
    padding: 10px 0;
    margin: 10px auto;

    button {
        background: rgba(100, 150, 220, .8);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 10px;         
    }
`;