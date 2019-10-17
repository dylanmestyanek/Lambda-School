import React from "react"

import styled from "styled-components"

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todo: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.state.todo !== "" && this.props.addTodo(this.state.todo);
        this.setState({ todo: '' })
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.todo}
                    name="todo"
                    placeholder="+ New Task"
                    onChange={this.handleChange}
                />
                <ButtonContainer>
                    <button type="submit">Add Task</button>
                    <button onClick={this.props.removeTasks}>Remove Selected</button>
                </ButtonContainer>
            </Form>
        )
    }
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