import { bindActionCreators } from "../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux";



const reducer = (state = initialState, action) {
    if (bindActionCreators.type === 'ADD_NAME') {
        return {
            ...state,
            newNameGoesHere
        }
    } else {
        return state
    }
}

const reducer = (state = initialState, action) {
    switch(action.type){
        case 'ADD_NAME':
            return {
                ...state,
                names: [...names, action.payload]
            }
        default:
            return state
    }
}

const List = props => {
    return (
        props.names.map(name => {
            return <div>{name}</div>
        })
    )
}