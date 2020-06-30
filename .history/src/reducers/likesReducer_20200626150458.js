import { LIKE_DELETE, LIKE_POST } from '../actions/types';

export default (state = { likeCounter: {} }, action) => {
    switch (action.type) {
        case LIKE_POST:
            return {
                ...state,
                likeCounter: { ...action.payload },
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
