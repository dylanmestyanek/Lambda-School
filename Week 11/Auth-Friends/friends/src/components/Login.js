import React, { useState } from "react"
import { render } from "@testing-library/react"

import authWithAxios from "../utils/authWithAxios"

const Login = props => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    // Upon submitting form, if credentials match, a token will be
    // saved to localStorage and user will be sent to friendsList page
    const handleSubmit = e => {
        e.preventDefault();
        authWithAxios().post("/login", credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload)
                props.history.push("/friendslist")    
            })
            .catch(err => console.log(err.response))
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username"
                placeholder="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="password"
                placeholder="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button type="submit">Log In</button>
        </form>    
    );
}

export default Login