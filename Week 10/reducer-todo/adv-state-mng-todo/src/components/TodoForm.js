import React from "react"
import styled from "styled-components"

const TodoForm = ({ 
    handleChange, 
    handleSubmit, 
    todo, 
    dispatch 
}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <input 
                type="text"
                name='todo'
                value={todo}
                onChange={(e) => handleChange(e)}
            />
            <ButtonContainer>
                <button type="submit">Add Todo</button>
                <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>Clear Completed</button>
            </ButtonContainer>
        </Form>
    );
}

export default TodoForm

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 80%;
        padding: 5px 0 5px 20px;
        margin-bottom: 20px;
        border: none;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    button {
        width: 150px;
        background: #8ACEF0;
        padding: 5px 0;
        border: none;
        border-radius: 5px;
        font-size: 1.4rem;
        transition: all .3s;
        font-family: 'Roboto', sans-serif;

        &:hover {
            background: #064B6E;
            color: white;
        }
    }
`;