import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-redux';

const initialState = {};

const middleware = thunk;

const store = createStore(
    () => [],
    initialState,
    compose()
)
