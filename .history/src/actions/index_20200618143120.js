import posts from '../api/posts';
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING, FETCH_POST } from './types';

export const fetchPending = () => {
    return {
        type: FETCH_PENDING,
    };
};

export const fetchPosts = () => async (dispatch) => {
    const response = await posts.get('/posts');
    console.log(Object.values(response.data.data.id));
    dispatch({ type: FETCH_POSTS, payload: response.data.data });
};
export const fetchPost = (id) => async (dispatch) => {
    const response = await posts.get(`/posts/${id}`);
    console.log(response.data.data.id);
    dispatch({ type: FETCH_POST, payload: response.data.data });
};
export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error,
    };
};
