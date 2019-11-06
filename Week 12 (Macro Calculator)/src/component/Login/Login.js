import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import "./Login.scss"
import { login, fetchProfile } from "../../store/actions"


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1478144592103-25e218a04891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: 'grey !important',
    borderColor: 'grey !important'
  }
}));

const Login= ({ values, loading })=> {
  const classes = useStyles();
  
  return (
    <Grid container component="main" className={classes.root}>
      <Grid sm={4} md={7} className={classes.image} />
      <Grid md={5} elevation={6}>
        <div className='form-container'>
          <div className='spacer'></div>
          <Typography component="h1" variant="h5">
            Macro Calculator
          </Typography>
          <em><p>Taking the guessing out of nutrition</p></em>
          <Typography component="h2" variant="h5">
            Sign in
          </Typography>
          <Form className={classes.form} noValidate>
            <Field className='form-input' 
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              InputProps={{
                classes: { notchedOutline: classes.input },
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
              />
            <Field className='form-input'
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                classes: { notchedOutline: classes.input },
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
              />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={loading}
              >
              {!loading 
                ? 'Sign In' 
                : <Loader
                type="ThreeDots"
                color="#FEE88D"
                height={15}
                width={50}
                />}
            </Button>
            <Grid container>
              <Link to="/SignUp" className="sign-up-link">
                  {"Don't have an account?"}
                </Link>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
  
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username required"),
    password: Yup.string().required("Please enter password")
  }),
  
  handleSubmit(values, {resetForm, ...rest} ) {
    rest.props.login(values);
  }
  
})(Login);

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {login, fetchProfile })(FormikLogin);

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#" to="/dashboard">
          Macro Calculator
        </Link>{' '}
        {new Date().getFullYear()}
        <br/>
        {"Image Credit:"}
        <Link to="https://unsplash.com/@brookelark">
          {" Brooke Lark"}
        </Link>
      </Typography>
    );
  }

  