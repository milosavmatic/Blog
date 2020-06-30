import { POST_COMMENTS, FETCH_COMMENTS, EDIT_COMMENTS, DELETE_COMMENTS } from '../actions/types';

export default function (state = { comment: {}, editComment: '', deleteComment: {} }, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comment: action.payload,
            };
        case POST_COMMENTS:
            return {
                ...state,
                ...action.payload,
            };
        case EDIT_COMMENTS:
            return {
                ...state,
                editComment: action.payload,
            };
            case DELETE_COMMENTS: 
            ..state,
            deleteComment: action.payload

        default:
            return state;
    }
}
