import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import commentsReducer from './commentsReducer';
import likesReducer from './likesReducer'

export default combineReducers({
    posts: PostsReducer,
    auth: authReducer,
    comments: commentsReducer,
    errors: errorReducer,
    likes: likesReducer
});
