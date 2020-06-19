import axios from 'axios'
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPending = () => {
    return {
        type: FETCH_PENDING,
    };
};

export const fetchPosts = id => async (dispatch) => {
    const response = await axios.get(, id);
    dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error,
    };
};