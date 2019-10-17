import React from 'react';
import RegisterForm from './RegisterForm';
import { Redirect } from 'react-router-dom';

const Register = ({history}) =>{
    return(
        <div className="register-page">
            {localStorage.getItem('token') ? <Redirect to='/dashboard'/> : <RegisterForm history={history}/>}
        </div>
    );
};

export default Register;