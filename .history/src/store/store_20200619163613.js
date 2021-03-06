import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'react-redux';
import reducer from '../reducers/index'

const initialState = {};

const middleware = thunk;

const store = createStore(
    () => [],
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
