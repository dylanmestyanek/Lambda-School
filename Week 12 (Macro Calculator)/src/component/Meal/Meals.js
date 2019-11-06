import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { connect } from "react-redux"
import { Bar } from "react-chartjs-2"

import './Meal.scss'
import HeaderLayout from "../HeaderLayout/HeaderLayout"
import { fetchProfile } from "../../store/actions"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: '#FEEED3',
    height: '100vh',
  },
}));

const Meals = ({ 
  calorieIntake, 
  fetchProfile,
  protein,
  carbs,
  fat 
  }) => {

  const classes = useStyles();
  const [snackAmount, setSnackAmount] = useState(false)
  const [mealAmount, setMealAmount] = useState({
    meals: 3,
    threeMeals: true,
    fourMeals: false,
    snackAndMeals: false
  })

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile])

  return (
    <div className={classes.root}>
      <HeaderLayout />
        <div className="macroDiv">
            <h2>Daily Nutrition Breakdown</h2>
            <Grid item xs>
              <h3>Today I am eating...</h3>
            </Grid>
            {/* Contains buttons to select how many meals you are eating */}
            <div className='button-container'>
              <Grid>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                  style={mealAmount.threeMeals ? {boxShadow: '0px 0px 15px #FEE8BD'} : {}}
                  onClick={() => {
                    setMealAmount({
                      ...mealAmount,
                      meals: 3,
                      threeMeals: true,
                      fourMeals: false,
                      snackAndMeals: false
                    })
                    setSnackAmount(false)
                  }}
                >
                  3 MEALS
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                  style={mealAmount.fourMeals ? {boxShadow: '0px 0px 15px #FEE8BD'} : {}}
                  onClick={() => {
                    setMealAmount({
                      ...mealAmount,
                      meals: 4,
                      threeMeals: false,
                      fourMeals: true,
                      snackAndMeals: false
                    })
                    setSnackAmount(false)
                  }}
                >
                  4 MEALS
                </Button>
              </Grid>
              <Grid>
                <Button
                  variant="outlined"
                  color="inherit"
                  className={classes.button}
                  style={mealAmount.snackAndMeals ? {boxShadow: '0px 0px 15px #FEE8BD'} : {}}
                  onClick={() => {
                    setMealAmount({
                      ...mealAmount,
                      meals: 4,
                      threeMeals: false,
                      fourMeals: false,
                      snackAndMeals: true
                    })
                    setSnackAmount(true)
                  }}
                >
                  3 MEALS & 2 SNACKS
                </Button>
              </Grid>
            </div>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
              spacing={2}
              className='info-container'
            >
              {/* Meal nutrition breakdown + Bar graph */}
              <div className='info-breakdown'>
                  <h4>Meal Breakdown</h4>
                  <Bar
                    data={{
                      labels: [
                        `Protein: ${Math.floor(protein / mealAmount.meals)}g`,
                        `Carbs: ${Math.floor(carbs / mealAmount.meals)}g`,
                        `Fat: ${Math.floor(fat / mealAmount.meals)}g`],
                      datasets: [
                        {
                          data: [
                            Math.floor(protein / mealAmount.meals), 
                            Math.floor(carbs / mealAmount.meals), 
                            Math.floor(fat / mealAmount.meals)
                          ],
                          backgroundColor: [
                            '#f4845f',
                            '#f7b267',
                            '#f25c54'
                          ]
                        }
                      ]
                    }}
                    width={100}
                    height={45}
                    options={{
                      scales: {
                        yAxes: [{
                          ticks: {
                            beginAtZero: true,
                            steps: 10,
                            max: 100
                          }
                        }]
                      },
                      legend: {
                        display: false
                      },
                      title: {
                        text: `Macronutrients for ${snackAmount ? '3' : mealAmount.meals} meals`,
                        display: 'top'
                      }
                    }}
                  />
               
                    <h3>{Math.round(calorieIntake / mealAmount.meals)} calories per meal</h3>
              </div>
              
              {/* Snack nutrition breakdown + Bar graph */}              
              <div className='info-breakdown'>
                <h4>{snackAmount ? 'Snack Breakdown' : 'No Snacks Today!'}</h4>
                <Bar
                  data={{
                    labels: [
                      `Protein: ${!snackAmount ? 0 : Math.floor((protein / mealAmount.meals) / 2)}g`,
                      `Carbs: ${!snackAmount ? 0 : Math.floor((carbs / mealAmount.meals) / 2)}g`,
                      `Fat: ${!snackAmount ? 0 : Math.floor((fat / mealAmount.meals) / 2)}g`],
                    datasets: [
                      {
                        data: [
                          !snackAmount ? 0 : Math.floor((protein / mealAmount.meals) / 2), 
                          !snackAmount ? 0 : Math.floor((carbs / mealAmount.meals) / 2), 
                          !snackAmount ? 0 : Math.floor((fat / mealAmount.meals) / 2)
                        ],
                        backgroundColor: [
                          '#f4845f',
                          '#f7b267',
                          '#f25c54'
                        ]
                      }
                    ]
                  }}
                  width={100}
                  height={45}
                  options={{
                    scales: {
                        yAxes: [{
                          ticks: {
                            beginAtZero: true,
                            steps: 10,
                            max: 100
                          },
                        }]
                      },
                    legend: {
                      display: false
                    },
                    title: {
                      text: `Macronutrients for ${snackAmount ? '2' : '0'} snacks`,
                      display: 'top'
                    }
                  }}
                 />
                <h3>{!snackAmount ? 0 : Math.floor(calorieIntake / 8)} calories per snack</h3>
              </div>
            </Grid>
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    calorieIntake: state.calorieIntake,
    protein: state.protein,
    carbs: state.carbs,
    fat: state.fat
  }
}

export default connect(mapStateToProps, {fetchProfile})(Meals)

