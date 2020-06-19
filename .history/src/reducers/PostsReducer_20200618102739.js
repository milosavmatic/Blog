import { FETCH_ERROR, FETCH_POSTS, FETCH_PENDING } from '../actions/types';

const initialsState = {
    posts: [],
    pending: false,
    error: null,
};

export default (state = {}, action) => {
    switch (action) {
        case FETCH_PENDING:
            return { ...state, pending: true };
        case FETCH_POSTS:
            return { ...state,  action.payload };
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
