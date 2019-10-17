import React from "react"
import Todo from "./Todo"

import styled from "styled-components"

class TodoList extends React.Component {
    render(){
        return (
            <TodoContainer>
                {!this.props.todos.length && <h3>No tasks currently</h3>}
                {
                    this.props.todos.map(todo => <Todo todo={todo} toggleCompleted={this.props.toggleCompleted} />)
                    
                }
            </TodoContainer>
        )
    }
}

export default TodoList;

const TodoContainer = styled.div`
    background: white;
    width: 80%;
    margin-top: 20px;
    padding: 5px 20px;
    font-size: 1.5rem;
    line-height: 2;
    border-radius: 5px;

    h3 {
        font-size: 1.7rem;
        font-family: 'Roboto', sans-serif;
    }
`;