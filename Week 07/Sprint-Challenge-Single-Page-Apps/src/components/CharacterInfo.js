import React from "react";

const CharacterInfo = (props) => {
        let person = props.characters.find(toon => toon.id === (+props.match.params.id));
        // console.log(person.species)
    return(
        
                <p> hi </p>
         
    );
};

export default CharacterInfo;