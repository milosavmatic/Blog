import { FETCH_POSTS, FETCH_ERROR, FETCH_PENDING } from './types';


export const fetchPending = () => {
    return {
        type: FETCH_PENDING,
        
    }
}

export const fetchPosts = (posts) => {
    return {
        type: FETCH_POSTS,
        payload: posts,
    };
};
