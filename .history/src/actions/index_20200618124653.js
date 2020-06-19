import post from '../actions/index'
import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';

export const fetchPosts = () => async (dispatch) => {
    dispatch({ type: FETCH_PENDING });
    try {
        const response = await axios.get('https://exampleapi.com/products');
        console.log(response.data.data);
        return dispatch({ type: FETCH_POSTS, payload: response.data });
    } catch (error) {
        dispatch({ type: FETCH_ERROR, error });
    }
};

export fetchPosts = () => async