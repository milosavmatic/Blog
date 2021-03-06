import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    posts: PostsReducer,
    errors: errorReducer,
    auth: authReducer,
});
