let actions = {
    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    },
    deleteTodo(id) {
        return {
            type: 'DELETE_TODO',
            todoId: id
        }
    },
    completeTodo(id) {
        return {
            type: 'COMPLETE_TODO',
            todoId: id
        }
    }
};

export default actions;