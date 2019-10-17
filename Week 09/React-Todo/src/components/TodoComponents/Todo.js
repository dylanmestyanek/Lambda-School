import React from "react"
import styled from "styled-components"

class Todo extends React.Component {
    render(){
        return (
            <TodoItem 
                onClick={() => this.props.toggleCompleted(this.props.todo.id)}
                style={{
                    textDecoration: this.props.todo.completed && "line-through",
                    background: this.props.todo.completed ? "#E98989" : "#85BC92",
                    borderColor: this.props.todo.completed ? "#FE3636" : "#066E36"
                }}
                id={this.props.todo.completed}
            >
                {this.props.todo.task}
            </TodoItem>
        );
    }
}

export default Todo

const TodoItem = styled.div`
    background: #64A984;
    padding-left: 10px;
    max-width: 100%;
    border-left: 3px solid #066E36;
    border-radius: 3px;
    margin: 4px;
    font-size: 1.7rem;
    font-family: 'Roboto', sans-serif;
    transition: all .2s;
`;