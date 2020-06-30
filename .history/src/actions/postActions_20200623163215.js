import posts from '../api/posts';
import {
    FETCH_POSTS,
    DELETE_POST,
    FETCH_PENDING,
    FETCH_POST,
    CREATE_POST,
    EDIT_POST,
} from './types';

export const fetchPending = () => {
    return {
        type: FETCH_PENDING,
    };
};

export const fetchPosts = () => async (dispatch) => {
    const response = await posts.get('/posts');
    console.log(response.data.data);
    dispatch({ type: FETCH_POSTS, payload: response.data.data });
};
export const fetchPost = (id) => async (dispatch) => {
    const response = await posts.get(`/posts/${id}`);
    dispatch({ type: FETCH_POST, payload: response.data });
};
export const createPost = (formValue, history) => async (dispatch) => {
    const response = await posts.post(
        '/posts',
        { ...formValue },
        
        
    );
    history.push('/');
    console.log(response.data);
    dispatch({ type: CREATE_POST, payload: response.data });
};
export const editPost = (id, editValue, history) => async (dispatch) => {
    const response = await posts.put(`/posts/${id}`, editValue);
    console.log(response.data.data);
    dispatch({ type: EDIT_POST, payload: response.data });
    history.push('/');
};
export const deletePost = (id, history) => async (dispatch) => {
    await posts.delete(`/posts/${id}`);
    console.log(id);
    dispatch({ type: DELETE_POST, payload: id });
    history.push('/');
};
