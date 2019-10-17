export const initialState = [{
    item: 'Learn about reducers',
    completed: false,
    id: Date.now()
}]

export const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, newTodo]
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.payload){
                    console.log(todo)
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else return todo
            })
        case 'CLEAR_COMPLETED':
            return state.filter(todo => !todo.completed)
        default:
            return state;
    }
}