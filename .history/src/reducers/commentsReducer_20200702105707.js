import {
    POST_COMMENTS,
    FETCH_COMMENTS,
    EDIT_COMMENTS,
    DELETE_COMMENTS,
} from '../actions/types';

export default function (
    state = {
        comments: {},
        editComment: '',
        deleteComment: {},
        postComment: {},
    },
    action
) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                comments: action.payload,
            };
        case POST_COMMENTS:
            return {
                ...state,
                postComment: action.payload,
            };
        case EDIT_COMMENTS:
            return {
                ...state,
                editComment: action.payload,
            };
        case DELETE_COMMENTS:
            return {
                ...state,
                deleteComment: action.payload,
            };
        default:
            return state;
    }
}
