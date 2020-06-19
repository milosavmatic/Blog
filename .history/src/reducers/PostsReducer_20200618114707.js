import { FETCH_ERROR, FETCH_POSTS, FETCH_PENDING } from '../actions/types';

const inititalsState = {
    posts: [],
    error: null,
    isLoading: false,
};

export default (state = inititalsState, action) => {
    switch (action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
                isLoading: false,
            };
        case FETCH_ERROR:
            return {
                error: action.error,
                isLoading: false,
            };
        default:
            return state;
    }
};
