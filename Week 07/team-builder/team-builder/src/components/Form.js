import React, { useState, useEffect } from "react";
import styled from "styled-components";

const UserForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        margin: 5px 0 5px 5px;
        width: 300px;
        padding: 4px;
    }

    label {
        margin-left: 5px; 
    }

    button {
        border: none;
        margin-left: 10px;
        padding: 5px 10px;
    }
`;

const Form = props => {
    const [user, setUser] = useState(props.member || {
        id: '',
        name: '',
        email: '',
        role: ''
    })

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({...user, [name]: value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.member 
            ? props.editMember(user)
            : props.addNewMember(user);
        setUser({
            name: '',
            email: '',
            role: ''
        });
    };
 
    return (
        <UserForm onSubmit={(event) => handleSubmit(event)}>
            <label>
                Name:
                <input 
                    onChange={(event) => handleChange(event)}
                    name="name"
                    type="text" 
                    value={user.name} 
                />
            </label>
            <label>
                E-Mail:
                <input 
                    onChange={(event) => handleChange(event)}
                    name="email" 
                    type="email" 
                    value={user.email} 
                />
            </label>
            <label>
                Role:
                <input 
                    onChange={(event) => handleChange(event)}
                    name="role" 
                    type="text" 
                    value={user.role} 
                />
            </label>
            <button>Submit!</button>
        </UserForm>
    );   
}

export default Form;