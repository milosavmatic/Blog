import { ADD_COMMENT } from './types';

export const addComment = (text) => {
    return {
        type: ADD_COMMENT,
        payload: text,
    };
};
