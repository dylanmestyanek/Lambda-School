import React, { useEffect, useState } from "react";
import "./Dashboard.scss"
import { connect } from "react-redux"
import { fetchProfile, editGoals } from "../../store/actions"
import HeaderLayout from "../HeaderLayout/HeaderLayout"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { Pie } from "react-chartjs-2"

const Dashboard = ({ 
    currentUser,
    calorieIntake, 
    fetchProfile ,
    editGoals,
    protein,
    carbs,
    fat,
    loading
}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [time] = useState(new Date().getHours())
    const [newInfo, setNewInfo] = useState({
        goal: 0,
        weight: ''
    })

    const saveGoals = e => {
        e.preventDefault();
        editGoals(newInfo)    
        setIsEditing(false)
    }

    useEffect(() => {
        fetchProfile();
        setNewInfo({
            ...newInfo,
            weight: currentUser.weight
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser.weight, currentUser.goal, fetchProfile])


    const handleChange = e => {
        setNewInfo({
            ...newInfo,
            [e.target.name]: +e.target.value
        })
    }

    return (
      <div className = "containerDashboard">
      <HeaderLayout />
        <div className = "mainBox">
        {/* Greeting to user depending on time of day */}
        <div className="headerDashboard">
            <h1>{time >= 0 && time < 12 
                ? 'Good Morning' 
                : time >= 12 && time <= 16 
                ? 'Good Afternoon' 
                : 'Good Evening'
            }, {currentUser.username}!</h1>
        </div>
        {/* Main content of dashboard */}
        <div className="data-display-containers">
                {/* Box displays displays current info OR form to edit weight + goal */}
                <div className ="box">
                <h3>Today's Calorie Goal</h3>
                {/* If you DID NOT click the edit button, render a div with the user info
                OTHERWISE, render a form to allow user to change weight + goal */}
                { !isEditing && !loading
                    ?   <div className="calorieGoal">
                            <h1><span>{calorieIntake}</span> Calories</h1>
                            <div className="goal-info">
                                {/* Conditionally rendering user info based on their current weight and goal */}
                                <p>Recent Weigh-In: <span>{currentUser.weight} lbs.</span></p>
                                    {currentUser.goal < 0 
                                    ? <p>You're consuming a <span>{currentUser.goal * 100}%</span> calorie deficit.</p>
                                    : currentUser.goal === 0 
                                    ? <p>Maintaining your weight of <span>{currentUser.weight} lbs.</span></p>
                                    : <p>You're consuming a <span>{currentUser.goal * 100}%</span> calorie surplus.</p>}   
                            </div>
                            <button onClick={() => setIsEditing(true)}>Edit Your Goals</button>               
                        </div>
                    : !isEditing && loading
                    ? <Loader
                        type="TailSpin"
                        color="#FECD6B"
                        height={150}
                        width={100}
                        />
                    : <form onSubmit={saveGoals}>
                            <label>Recent Weigh-In (lbs.):</label>
                            <input 
                                name="weight"
                                type="number" 
                                placeholder={`Last weigh-in: ${currentUser.weight} lbs.`} 
                                value={newInfo.weight}
                                onChange={handleChange} 
                            />
                            <label>Modify Weight Goal:</label>
                            <select onChange={handleChange} name="goal" className = "goalsInput" placeholder ="Edit your nutrition goals">
                                <option value={-.20}>Aggressive Weight Loss</option>
                                <option value={-.15}>Moderate Weight Loss</option>
                                <option value={-.10}>Mild Weight Loss</option>
                                <option value={0}>Maintain Healthy Weight</option>
                                <option value={.10}>Moderate Weight Gain</option>
                                <option value={.15}>Aggressive Weight Gain</option>
                            </select>
                            <button type="submit">Save New Goals</button>
                        </form>  
                }
                </div>
                <div className = "pie-chart">
                    <h3>Macro Nutrient Breakdown</h3>
                    {/* If page is not loading, show pie chart, otherwise show react-spinning-loader */}
                    { !loading 
                        ?   <><Pie
                                data={{
                                    labels: [
                                        `Fat (g)`,
                                        `Carbs (g)`,
                                        `Protein (g)`,
                                    ],
                                    datasets: [{
                                        data: [fat, carbs, protein],
                                        backgroundColor: ['#f4845f', '#f7b267', '#f25c54'],
                                        borderColor: 'rgba(250, 250, 250, .6)',
                                    }]
                                }}
                                width={100}
                                height={45}
                                options={{
                                    legend: {
                                        borderColor: 'white',
                                        labels: {
                                            fontColor: 'rgba(250, 250, 250, .8)',
                                            boxWidth: 20,
                                            padding: 20
                                        }
                                    },
                                }}
                            />
                            <p>
                                <span style={{color: "#f25c54"}}> Fat: </span> {fat}g 
                                <span style={{color: "#f7b267"}}> Carbs: </span> {carbs}g  
                                <span style={{color: "#f4845f"}}> Protein: </span> {protein}g
                            </p></>
                        : <Loader
                            type="TailSpin"
                            color="#FECD6B"
                            height={300}
                            width={100}
                        /> 
                            } 
                </div>
            </div>
        </div>
      </div>
  );
};

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        loading: state.loading,
        calorieIntake: state.calorieIntake,
        protein: state.protein,
        carbs: state.carbs,
        fat: state.fat
    }
}

export default connect(mapStateToProps, {fetchProfile, editGoals})(Dashboard);
