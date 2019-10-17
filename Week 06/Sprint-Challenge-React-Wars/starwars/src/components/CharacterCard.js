import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const CharacterCard = ({ 
    key,
    name,
    height,
    mass,
    hairColor,
    skinColor,
    eyeColor,
    birthYear,
    gender,
    homeworld
 }) => {

    const [planet, setPlanet] = useState('');

    const CharacterDiv = styled.div`
        width: 300px;
        margin: 20px 0;
        padding: 10px 20px;
        border-radius: 5px;
        background: white;
        font-family: 'Montserrat', sans-serif;strong   `;

    const CharacterName = styled.h1`
        font-size: 2rem;
        font-family: 'Roboto', sans-serif;
    `;

    const EyeColor = styled.span`
        background: ${props => props.color === "blue-gray" ? 'teal' : props.color}
        padding: 2px;
        border-radius: 3px;
        color: ${props => props.color === 'yellow' ? 'black' : 'white'};
    `;

    const WeightColor = styled.span`
        background: ${props => props.weight > 100 ? 'green' : 'red'};
        color: white;
        padding: 3px;
        border-radius: 3px;
    `;

    const GenderColor = styled.span`
        background: ${props => 
            props.gender === 'n/a' 
            ? 'purple' 
            : props.gender === 'male' 
            ? 'dodgerblue' 
            : 'pink'}
        padding: 0px 2px;
        border-radius: 3px;
        color: white;
    `;
    
    useEffect(() => {
        axios.get(homeworld)
            .then(respo => setPlanet(respo.data.name))
            .catch(err => console.log('Woopsies', err))
    }, []);

    return (
        <CharacterDiv key={key}>
            <CharacterName>{name}</CharacterName>
            <p><strong>Height:</strong> {height} inches</p>
            <p><strong>Weight:</strong> <WeightColor weight={mass}>{mass} lbs.</WeightColor></p>
            <p><strong>Hair:</strong> {hairColor === 'n/a' || hairColor === 'none' ? "Don't look! I'm bald!" : hairColor}</p>
            <p><strong>Skin:</strong> {skinColor}</p>
            <p><strong>Eyes:</strong> <EyeColor color={eyeColor}>{eyeColor}</EyeColor></p>
            <p><strong>Birth Date:</strong> {birthYear === "unknown" ? "I was never born...." : birthYear}</p>
            <p><strong>Gender:</strong> <GenderColor gender={gender}>{gender === 'n/a' ? "Don't assume my gender" : gender}</GenderColor></p>
            <p><strong>Home World:</strong> {planet}</p>
        </CharacterDiv>
    );
};

export default CharacterCard;