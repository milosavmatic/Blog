import { LIKE_DELETE, LIKE_POST } from '../actions/types';

export default (state = { likeCounter: 0, deleteLike: {} }, action) => {
    switch (action.type) {
        case LIKE_POST:
            return {
                ...state,
                likeCounter: +1,
            };
        case LIKE_DELETE:
            return {
                ...state,
                deleteLike: action.payload,
            };
        default:
            return state;
    }
};
