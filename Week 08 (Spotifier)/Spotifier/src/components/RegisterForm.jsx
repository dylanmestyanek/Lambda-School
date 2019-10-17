import React from 'react';
import {Link} from 'react-router-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { register } from '../store/actions';

const RegisterForm = ({values, errors, touched}) =>{


    return (
        <div className="register-form-wrapper" >
            <h2 className="register-form-title"><i className="fas fa-headphones fa-1x"></i> Register</h2>
            <Form className="register-form">

                <div className="register-status">
                    {touched.username && errors.username && (<p className="err">{errors.username}</p>)}
                    {touched.email && errors.email && (<p className="err">{errors.email}</p>)}
                    {touched.pass && errors.pass && (<p className="err">{errors.pass}</p>)}
                    {touched.repass && errors.repass && (<p className="err">{errors.repass}</p>)}
                </div>

                <label htmlFor="username">Username: </label>
                <Field type="text" name="username" id="username" placeholder="JDoe1337" />

                <label htmlFor="email">Email: </label>
                <Field type="text" name="email" id="email" placeholder="johndoe@unknown.app" />

                <label htmlFor="pass">Password: </label>
                <Field type="password" name="pass" id="pass" />

                <label htmlFor="repass">Confirm password: </label>
                <Field type="password" name="repass" id="repass" />

                <button type="submit">Register</button>
            </Form>
            <p>If you have an account <Link to="/login"> click here to login</Link>.</p>
        </div>
    );
};

const FormikRegisterForm = withFormik({
    mapPropsToValues({username, email, pass, repass}){
        return{
            username: username || '',
            email: email || '',
            pass: pass || '',
            repass: repass || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username field is required.'),

        email: Yup.string()
            .email('Please enter a valid email.')
            .required('Email field is required.'),

        pass: Yup.string()
            .required('Password field is required.')
            .min(8, 'Your password must be at least 8 characters long.'),

        repass: Yup.string()
            .oneOf([Yup.ref('pass'), null], "Passwords don't match")
            .required('Confirm Password is required')

    }),

    handleSubmit(values, {resetForm, ...rest }){
        rest.props.register({username: values.username, password: values.pass})
        rest.props.history.push('/dashboard')
        resetForm('');
    }
});

export default connect((state)=>({...state}), {register})(FormikRegisterForm(RegisterForm));