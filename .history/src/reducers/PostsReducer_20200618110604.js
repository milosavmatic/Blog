import { FETCH_ERROR, FETCH_POSTS, FETCH_PENDING } from '../actions/types';



export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                pending: true,
            };
        case FETCH_POSTS:
            return {
                ...state,
                posts: action.payload,
            };
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
