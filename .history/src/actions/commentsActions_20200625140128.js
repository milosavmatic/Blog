import posts from '../api/posts';
import { POST_COMMENTS, FETCH_COMMENTS } from './types';

export const postComments = (commentsData, post_id) => async (dispatch) => {
    const response = await posts
        .post(`/comments`, commentsData, post_id)
        .catch((err) => console.log(err.response));
    dispatch({ type: POST_COMMENTS, payload: response.data.data });
};

export const fetchComments = (post_id) => async (dispatch) => {
    const response = await posts.get(`/comments?post=${post_id}`);
    console.log(response.data.data);
    dispatch({ type: FETCH_COMMENTS, payload: response.data.data });
};
