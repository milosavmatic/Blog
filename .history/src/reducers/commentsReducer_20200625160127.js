
import { POST_COMMENTS, FETCH_COMMENTS } from '../actions/types';

export default function (state = {comment: {}}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comment: (action.payload),
            };
        case POST_COMMENTS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
}
