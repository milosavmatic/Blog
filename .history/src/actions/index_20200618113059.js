import axios from 'axios';
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPosts = () => async (dispatch) => {
    dispatch({ type: FETCH_PENDING });
    try {
        const response = await axios.get(
            ''
        );
        return dispatch({ type: FETCH_POSTS, data: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ERROR, error });
    }
};
