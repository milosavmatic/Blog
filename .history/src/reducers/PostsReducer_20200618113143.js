import { FETCH_ERROR, FETCH_POSTS, FETCH_PENDING } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_POSTS:
            return {
                ...state,
                payload: action.data,
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
