import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux"
import "./HeaderLayout.scss";
import history from "../../history"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: '150px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Roboto'
  },
}));


const HeaderLayout = props => {
  const classes = useStyles();
  
  const logout = () => {
    localStorage.removeItem('token');
    history.push("/")
  }

    return(
      <div className="header">
      <div className={classes.root}>
        <AppBar position="fixed" className="navStyle">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Macro Calculator
            </Typography>
            <Button onClick={() => history.push("/dashboard")} color="inherit">Dashboard</Button>
            <Button onClick={() => history.push("/meals")} color="inherit">Meals</Button>
            <Button onClick={logout} color="inherit">Log Out</Button>
          </Toolbar>
        </AppBar>
      </div>
      </div>
    );    
}

export default connect(null, {})(HeaderLayout) 