import React from "react"
import styled from "styled-components"

const TodoList = ({ state, dispatch }) => {

    const toggleTodo = (task) => {
        dispatch({ type: "TOGGLE_TODO", payload: task.id})
    }

    return (
        <TodoContainer>
            {!state.length && <h3>No tasks currently!</h3>}
            {
                state.map(task => <TodoItem 
                        style={{
                            textDecoration: task.completed ? "line-through" : "none",
                            background: task.completed ? "#E98989" : "#85BC92",
                            borderColor: task.completed ? "#FE3636" : "#066E36"
                        }} 
                        onClick={() => toggleTodo(task)}>
                        {task.item}
                    </TodoItem>)
            }
        </TodoContainer>
    );
}

export default TodoList


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
