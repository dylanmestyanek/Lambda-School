import React from "react";

import Card from "./Card"

const CardContainer = ({ googleData }) => {
    return (
        <div>
            <h1 data-testid="dataTitle">Women's World Cup Players</h1>
            {
                googleData.map((player, idx) => <Card key={idx} player={player} />)
            }
        </div>
    );
}

export default CardContainer