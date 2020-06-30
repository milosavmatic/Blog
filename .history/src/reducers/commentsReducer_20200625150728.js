import _ from 'lodash';
import { POST_COMMENTS, FETCH_COMMENTS } from '../actions/types';

const initialState = {
    comments: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_COMMENTS:
            return {
                ...state,
                 ...console.log([action.payload]),
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
