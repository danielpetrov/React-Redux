import { applyMiddleware, compose, createStore } from "redux";
import logger from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

let finalCreateStore = compose(
    applyMiddleware(thunk, logger())
)(createStore);

export default function configureStore(initialState = { todos: [], user: {} }) {
    return finalCreateStore(rootReducer, initialState);
}