import axios from 'axios';
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPending = () => {
    return {
        type: FETCH_PENDING,
    };
};

export const fetchPosts = () => (dispatch) => {
    const response = fetch(
        'https://laravel-blog-tritacke.herokuapp.com/api/posts'
    )
        .then((res) => res.json())
        .then((res) => {
            if (res.error) {
                throw res.error;
            }
            console.log(res.data);
        });
    dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error,
    };
};
