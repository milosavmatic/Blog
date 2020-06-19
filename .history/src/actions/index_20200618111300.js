import axios from 'axios';
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPosts = () => async (dispatch) => {
    dispatch({ type: FETCH_PENDING });
    try {
        const response = await axios.get(
            'https://rickandmortyapi.com/api/character'
        );
        return dispatch({ type: FETCH_POSTS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ERROR, error });
    }
};
