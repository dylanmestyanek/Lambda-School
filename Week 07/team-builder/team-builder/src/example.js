import React, { useState } from "react";

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
        setUser({
            name: '',
            email: '',
            role: ''
        });
    };
 
    return (
        <form onSubmit={(event) => handleSubmit(event)}>
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
        </form>
    );   
}

export default Form;