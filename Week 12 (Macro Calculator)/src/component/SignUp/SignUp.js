import "date-fns";
import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { connect } from "react-redux"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import { register } from "../../store/actions"
import "./SignUp.scss"

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80)",
      backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "left"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  input: {
    color: '#515151 !important',
    borderColor: '#515151 !important'
  }
}));

const SignUp = ({ values, loading, error, isSubmitting }) => {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <Grid sm={4} md={7} className={classes.image} />
      <Grid md={5} elevation={6} square>
        <div className='form-container'>
        <div className='sign-up-spacer'></div>
        <Typography component="h1" variant="h5">
            Macro Calculator
          </Typography>
          <em><p>Create an account:</p></em>
          <Form className={classes.form} noValidate>
            <Field className='signup-input'
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              id="name"
              label="Username"
              name="username"
              autoFocus
              InputProps={{
                classes: { notchedOutline: classes.input },
                className: classes.input
              }}
              InputLabelProps={{ className: classes.input }}
              />
            <Field className='signup-input'
              component={TextField}
              variant="outlined"
              margin="normal"
              required
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
              <Field
                className='signup-input'
                component={TextField}
                margin="normal"
                fullWidth
                name="weight"
                label="Weight (lbs)"
                type="number"
                />
              <Field
                className='signup-input dropdown'
                component={TextField}
                fullWidth
                select
                name="height"
                label="Height"
                value={values.weightRange}
              >
                <MenuItem value={48}>4' 0"</MenuItem>
                <MenuItem value={49}>4' 1"</MenuItem>
                <MenuItem value={50}>4' 2"</MenuItem>
                <MenuItem value={51}>4' 3"</MenuItem>
                <MenuItem value={52}>4' 4"</MenuItem>
                <MenuItem value={53}>4' 5"</MenuItem>
                <MenuItem value={54}>4' 6"</MenuItem>
                <MenuItem value={55}>4' 7"</MenuItem>
                <MenuItem value={56}>4' 8"</MenuItem>
                <MenuItem value={57}>4' 9"</MenuItem>
                <MenuItem value={58}>4' 10"</MenuItem>
                <MenuItem value={59}>4' 11"</MenuItem>
                <MenuItem value={60}>5' 0"</MenuItem>
                <MenuItem value={61}>5' 1"</MenuItem>
                <MenuItem value={62}>5' 2"</MenuItem>
                <MenuItem value={63}>5' 3"</MenuItem>
                <MenuItem value={64}>5' 4"</MenuItem>
                <MenuItem value={65}>5' 5"</MenuItem>
                <MenuItem value={66}>5' 6"</MenuItem>
                <MenuItem value={67}>5' 7"</MenuItem>
                <MenuItem value={68}>5' 8"</MenuItem>
                <MenuItem value={69}>5' 9"</MenuItem>
                <MenuItem value={70}>5' 10"</MenuItem>
                <MenuItem value={71}>5' 11"</MenuItem>
                <MenuItem value={72}>6' 0"</MenuItem>
                <MenuItem value={73}>6' 1"</MenuItem>
                <MenuItem value={74}>6' 2"</MenuItem>
                <MenuItem value={75}>6' 3"</MenuItem>
                <MenuItem value={76}>6' 4"</MenuItem>
                <MenuItem value={77}>6' 5"</MenuItem>
                <MenuItem value={78}>6' 6"</MenuItem>
                <MenuItem value={79}>6' 7"</MenuItem>
                <MenuItem value={80}>6' 8"</MenuItem>
                <MenuItem value={81}>6' 9"</MenuItem>
                <MenuItem value={82}>6' 10"</MenuItem>
                <MenuItem value={83}>6' 11"</MenuItem>
                <MenuItem value={84}>7' 0"</MenuItem>
              </Field>
              <Field
                className='signup-input'
                component={TextField}
                fullWidth
                select
                name="exerciseFrequency"
                label="Activity Level"
                value={values.weightRange}
                >
                <MenuItem value={1.2}>0 days</MenuItem>
                <MenuItem value={1.375}>1-2 days</MenuItem>
                <MenuItem value={1.55}>3-4 days</MenuItem>
                <MenuItem value={1.725}>5-6 days</MenuItem>
                <MenuItem value={1.9}>7 days</MenuItem>
              </Field>
              <Field
                className='signup-input'
                component={TextField}
                fullWidth
                select
                name="goal"
                label="Goal"
                value={values.weightRange}
                >
                <MenuItem value={-.20}>Aggressive Weight Loss</MenuItem>
                <MenuItem value={-.15}>Moderate Weight Loss</MenuItem>
                <MenuItem value={-.10}>Deficit Weight Loss</MenuItem>
                <MenuItem value={0}>Maintain Weight</MenuItem>
                <MenuItem value={.10}>Moderate Weight Gain</MenuItem>
                <MenuItem value={.15}>Aggressive Weight Gain</MenuItem>
              </Field>

            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field component={ TextField}
                  className='signup-input'
                  id="date"
                  label="Age"
                  type="number"
                  name="age"
                  fullWidth
                />
                <Field
                  className='signup-input'
                  component={TextField}
                  fullWidth
                  select
                  name="male"
                  label="Gender"
                  placeholder="Male/Female"
                  value={values.weightRange}
                >

                  <MenuItem value={true}>Male</MenuItem>
                  <MenuItem value={false}>Female</MenuItem>
                </Field>
            </MuiPickersUtilsProvider>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              disabled={loading}
              >
              {!loading 
                ? 'Sign Up' 
                : <Loader
                    type="ThreeDots"
                    color="#FECD6B"
                    height={15}
                    width={50}
                  />}
            </Button>
            <Grid container>
                <Link to="/" className="sign-up-link">
                  {"Already have an account?"}
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
const FormikSignUp = withFormik({

  mapPropsToValues({ username, exerciseFrequency, goal, password, weight, height, age, male }) {
    return {
      username: username || "",
      password: password || "",
      weight: weight || "",
      height: height || "",
      age: age || "",
      goal: goal || "",
      exerciseFrequency: exerciseFrequency || "",
      male: male || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    weight: Yup.string().required("Weight is required"),
    height: Yup.string().required("Height is required"),
    exerciseFrequency: Yup.string().required("Choose an activity level"),
    goal: Yup.string().required("Goal is required"),
    male: Yup.string().required("Gender is required"),
    password: Yup.string().required('Password is required'),
    age: Yup.string().required("Age is required"),
  }),

  //You can use this to see the values
  handleSubmit(values, {resetForm, ...rest}) {
    rest.props.register(values);
    resetForm();
  }
  
})(SignUp);

const mapStateToProps = state => {
  console.log(state)
  return {
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStateToProps, {register})(FormikSignUp);

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" className="sign-up-copyright">
      {"Copyright © "}
      <Link color="inherit" href="#" to="/dashboard">
        Macros Calculator
      </Link>{" "}
      {new Date().getFullYear()}
      <br/>
      {"Image Credit:"}
      <Link to="https://unsplash.com/@brookelark">
        {" Brooke Lark"}
      </Link>
    </Typography>
  );
}
