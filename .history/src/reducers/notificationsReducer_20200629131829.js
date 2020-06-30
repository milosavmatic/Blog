import { FETCH_NOTIFICATIONS, POST_NOTIFICATIONS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS:
            return {
                ...state,
                ...action.payload,
            };
            case POST_NOTIFICATIONS:
                return {
                    ...state,
                    ...action.payload
                }
        default:
            return state;
    }
};
