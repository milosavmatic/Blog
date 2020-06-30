import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    posts: PostsReducer,
    auth: authReducer,
    errors: errorReducer,
    comment: commentsReducer,
});
