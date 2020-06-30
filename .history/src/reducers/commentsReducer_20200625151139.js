import _ from 'lodash';
import { POST_COMMENTS, FETCH_COMMENTS } from '../actions/types';




export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                   [action.payload.id]: action.payload  
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
