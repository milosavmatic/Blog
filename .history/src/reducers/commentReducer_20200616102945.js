import { ADD_COMMENT } from '../actions/types';

const initialState = {
    comment: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, comment: action.payload };
        default:
            return state;
    }
};
