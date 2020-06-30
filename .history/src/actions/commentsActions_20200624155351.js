import posts from '../api/posts';
import { POST_COMMENTS } from './types';

export const postComments = (commentsData, post_id) => async (dispatch) => {
    const response = await posts
        .post(`/comments`, commentsData, post_id)
        .catch((err) => console.log(err.response));
    console.log(response.config.data);

    dispatch({ type: POST_COMMENTS, payload: response.config.data });
};
