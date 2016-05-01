export default function userReducer(user = {}, action) {
    switch (action.type) {
        case 'CREATE_USER_ID':
            return Object.assign({}, user, {id: action.id});
        default:
            return user;
    }
}