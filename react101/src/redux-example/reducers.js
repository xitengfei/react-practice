/**
 * reducers must be pure function 
 *
 */
const initialState = {
    todos: [
        {
            text: 'Eat food',
            completed: true
        }, 
        {
            text: 'Exercise',
            completed: false
        }
    ],
    visibilityFilter: 'SHOW_COMPLETED'
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                ]
            })
        default:
            return state
    }
}

export default reducers