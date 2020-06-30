import posts from '../api/posts';
import { POST_COMMENTS } from './types';

export const postComments = (commentsData, post_id) => async (dispatch) => {
    const response = await posts.post(`/comments/${post_id}`, commentsData);
    console.log(response);
    
    dispatch({ type: POST_COMMENTS, payload: response.data })
    .catch((err) => console.log(err))
};
