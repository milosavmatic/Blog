import { FETCH_ERROR, FETCH_POSTS, FETCH_PENDING } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,... action.payload,
                
            };

        default:
            return state;
    }
};
