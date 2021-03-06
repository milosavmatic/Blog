import posts from '../api/posts';
import {
    FETCH_POSTS,
    FETCH_ERROR,
    FETCH_PENDING,
    FETCH_POST,
    CREATE_POST,
} from './types';
import history from '../history';

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
export const createPost = (formValue) => async (dispatch, getState) => {
    const response = await posts
        .post(
            '/posts',
            { ...formValue },
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
                    'content-type': 'multipart/form-data',
                },
            }
        )
        .then((response) =>
            dispatch({ type: CREATE_POST, payload: response.data.data })
        )
        .catch((err) => console.log(err));

    history.push('/');
};
export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error,
    };
};
