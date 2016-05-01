function getId(todos) {
    return todos.reduce((maxId, todo) => {
            return Math.max(maxId, todo.id);
        }, -1) + 1;
}

export default function todosReducer(todos = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                    {
                        text: action.text,
                        completed: false,
                        id: getId(todos)
                    },
                    ...todos
                ];
        case 'COMPLETE_TODO':
            return todos.map((todo) => {
                        return action.todoId === todo.id
                            ? Object.assign({}, todo, {completed: !todo.completed})
                            : todo
                    });
        case 'DELETE_TODO':
            return todos.filter((todo) => {
                        return action.todoId !== todo.id
                    });
        default:
            return todos;
    }
}