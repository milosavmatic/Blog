import { POST_COMMENTS } from '../actions/types';


export default function (state = {}, action) {
        switch(action.type) {
            case POST_COMMENTS:
                return {
                    ...state, 
                    ...action.payload
                }
                default: 
                return state
        }
}