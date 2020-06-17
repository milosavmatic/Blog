import { ADD_COMMENT } from '../actions/types';

const initialState = {
    comment: [],
};

export default const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return { ...state, ...action.payload };
    }
};
