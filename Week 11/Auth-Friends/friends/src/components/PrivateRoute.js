import React from "react"
import { Route, Redirect } from "react-router-dom"
import { Component } from "react"
import { REFUSED } from "dns"

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
        return localStorage.getItem('token')
            ? <Component {...props} />
            : <Redirect to="login" />
    }
    } />
)

