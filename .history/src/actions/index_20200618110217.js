import axios from 'axios';
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPosts = (id) => async (dispatch) => {
    dispatch({ type: FETCH_PENDING });
    try {
    const response = await axios.get(
        'https://laravel-blog-tritacke.herokuapp.com/api/posts',
        id
    );
    }
    dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error,
    };
};
