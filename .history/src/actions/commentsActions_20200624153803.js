import posts from '../api/posts';
import { POST_COMMENTS } from './types';

export const postComments = (commentsData, post_id) => async (dispatch) => {
    const response = await posts.post(`/comments`, commentsData, post_id);
    console.log(response);

    dispatch({ type: POST_COMMENTS, payload: response.data }).catch((err) =>
        console.log(err)
    );
};
