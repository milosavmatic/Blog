import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, CREATE_POST } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                ..._.mapKeys(action.payload, 'id'),
            };
        case FETCH_POST:
            return {
                ...state,
                [action.payload.id]: action.payload,
            };
        case CREATE_POST:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};
