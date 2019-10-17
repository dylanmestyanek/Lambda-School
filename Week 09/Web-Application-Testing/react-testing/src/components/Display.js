import React from "react"
import styled from "styled-components"

const Display = (props) => {
 
    return(
        <DisplayContainer>
            <h1>Game</h1>
            <DisplayTextContainer>
                <div>
                    <h3>Balls</h3>
                    <p data-testid="ballValue">{props.balls}</p>
                </div>
                <div>
                    <h3>Strikes</h3>
                    <p data-testid="strikeValue">{props.strikes}</p>
                </div>
            </DisplayTextContainer>
        </DisplayContainer>
    )
}

export default Display;

const DisplayContainer = styled.div`
`;

const DisplayTextContainer = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-evenly

    div {
        border: 1x solid black;
        width: 20%;
    }

`;