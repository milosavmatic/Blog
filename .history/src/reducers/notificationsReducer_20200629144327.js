import { FETCH_NOTIFICATIONS } from '../actions/types';

export default (state = { notification: {} }, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS:
            return {
                ...state,
                notification: {...action.payload},
            };

        default:
            return state;
    }
};
