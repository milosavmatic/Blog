import posts from '../api/posts';
import {
    FETCH_POSTS,
    DELETE_POST,
    FETCH_POST,
    CREATE_POST,
    EDIT_POST,
} from './types';

export const fetchPosts = () => async (dispatch) => {
    const response = await posts.get('/posts');
    console.log(response.data.data);
    dispatch({ type: FETCH_POSTS, payload: response.data.data });
};
export const fetchPost = (id) => async (dispatch) => {
    const response = await posts.get(`/posts/${id}`);
    console.log(response);
    dispatch({ type: FETCH_POST, payload: response.data });
};
export const createPost = (formValue, history) => async (dispatch) => {
    console.log(formValue);
    const response = await posts.post('/posts', formValue, {
        headers: {
            'Content-type': 'multipart/form-data',
        },
    });
    history.push('/');

    dispatch({ type: CREATE_POST, payload: response.data });
};
export const editPost = (id, editValue, history) => async (dispatch) => {
    const response = await posts
        .patch(`/posts/${id}`, {
            ...editValue,
        })
        .catch((err) => console.log(err.response));
    console.log(response.data);
    dispatch({ type: EDIT_POST, payload: response.data });
    history.push('/');
};
export const deletePost = (id, history) => async (dispatch) => {
    await posts.delete(`/posts/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
    history.push('/');
};
