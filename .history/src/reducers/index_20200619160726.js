import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    posts: PostsReducer,
    auth: authReducer,
    error: errorReducer,
});
