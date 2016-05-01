function getId(state) {
    return state.todos.reduce((maxId, todo) => {
            return Math.max(maxId, todo.id);
        }, -1) + 1;
}

export default function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: [
                    {
                        text: action.text,
                        completed: false,
                        id: getId(state)
                    },
                    ...state.todos
                ]
            });
        case 'COMPLETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                        return action.todoId === todo.id
                            ? Object.assign({}, todo, {completed: !todo.completed})
                            : todo
                    }
                )
            });
        case 'DELETE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter((todo) => {
                        return action.todoId !== todo.id
                    }
                )
            });
        default:
            return state;
    }
}