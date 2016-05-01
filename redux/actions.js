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
    },
    createNewUserId() {
        return {
            type: 'CREATE_USER_ID',
            id: Math.round(Math.random() * 100)
        }
    },
    createNewUserIdIfOdd() {
        return (dispatch, getState) => {
            const { user } = getState();
            if(user.id % 2){
                dispatch(actions.createNewUserId());
            }
        }
    },
    createNewUserIdAsync() {
        return dispatch => {
            setTimeout(() => {
                dispatch(actions.createNewUserId());
            }, 3000);
        }
    }
};

export default actions;