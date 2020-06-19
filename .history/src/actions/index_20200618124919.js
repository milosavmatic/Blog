import posts from '../api/posts';
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPending = () => {
    return {
        type: FETCH_PENDING,
    };
};

export const fetchPosts = () => async (dispatch) => {
    const response = await posts.get('/posts');
    console.log(response.data.data)
    dispatch({ type: FETCH_POSTS, payload: response.data.data });
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error,
    };
};
 