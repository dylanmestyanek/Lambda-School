import React, { useState, useEffect } from "react"

import Display from "./Display"

const Dashboard = () => {
    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);
    const [fouls, setFouls] = useState(0);

    useEffect(() => {
        if (strikes === 3 || balls === 4){
            setStrikes(0);
            setBalls(0)
        } 
    }, [strikes, balls])

    return(
        <div>
            <Display balls={balls} strikes={strikes}/>
            <div>
                <button data-testid="strikeButton" onClick={() =>{setStrikes(strikes + 1)}}>Strike</button>
                <button data-testid="ballButton" onClick={() => setBalls(num => ++num)}>Ball</button>
                <button data-testid="foulButton" onClick={() => setStrikes(strikes === 0 ? strikes + 1 : strikes === 1 ? strikes + 2 : strikes )}>Foul</button>
                <button data-testid="hitButton" onClick={() => {
                    setStrikes(0);
                    setBalls(0);
                }}>Hit</button>
            </div>
        </div>
    )
}

export default Dashboard