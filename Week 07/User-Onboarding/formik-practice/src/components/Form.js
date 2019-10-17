import React, { useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const LoginForm = ({ 
    values, 
    errors, 
    touched, 
    status,
    users,
    setUsers
}) => {

    useEffect(() => {
        status && setUsers([...users, status])
    }, [status])

    return (
        <Form className="user-form">
            <div className="input-container">
                <div>
                    <Field name="username" type="text" placeholder="Username" />
                    {touched.username && errors.username && <p className="error-message">{errors.username}</p>}
                </div>
                <div>
                    <Field name="email" type="email" placeholder="E-mail" />
                    {touched.email && errors.email && <p className="error-message">{errors.email}</p>}
                </div>
                <div>
                    <Field name="password" type="password" placeholder="Password" />
                    {touched.password && errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <Field name="role" component="select">
                    <option>Please select a role</option>
                    <option name="member">Team Member</option>
                    <option name="lead">Team Lead</option>
                    <option name="admin">Admin</option>
                </Field>
            </div>
            <br/>
            <label>
                <Field name="tos" type="checkbox" checked={values.tos} />
                Accept Terms of Service
            </label>
            {errors.tos && <p className="error-message">{errors.tos}</p>}
            <button type="submit" className="submit-button">Submit</button>
        </Form>
    );
};

const FormikLoginForm = withFormik({
    mapsPropsToValues({ 
        username, 
        email,
        password,
        role,
        tos
    }) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            role: role || "",
            tos: tos || false,
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(6, "Username must be longer than 6 characters")
            .required("A username is required"),
        email: Yup.string()
            .email("Invalid E-mail address")
            .required("E-mail is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters or longer")
            .required("Invalid password"),
        tos: Yup
            .boolean()
            .required("Must Accept Terms of Service")
    }),

    handleSubmit(values, { setStatus, setErrors }) {
        values.email === "waffle@syrup.com" 
            ? setErrors({ email: "That e-mail is already taken."})
            : axios.post("https://reqres.in/api/users", values)
                .then(respo => setStatus(respo.data))
                .catch(err => console.log("Whoopsies", err));
    }
})(LoginForm);

export default FormikLoginForm;