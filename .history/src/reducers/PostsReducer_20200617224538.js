import { FETCH_ERROR, FETCH_POSTS, FETCH_PENDING } from '../actions/types';

const initialsState = {
    posts: [],
    pending: false,
    error: null,
};


export default
