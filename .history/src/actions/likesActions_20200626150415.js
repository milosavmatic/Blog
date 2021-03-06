import posts from '../api/posts';
import { LIKE_DELETE, LIKE_POST } from './types';

export const postLike = (post_id) => async (dispatch) => {
    const response = await posts
        .post('/likes', { post_id })
        .catch((err) => console.log(err.response));
    console.log(response);
    dispatch({ type: LIKE_POST, payload: response });
};

export const deleteLike = (post_id, user_id) => async (dispatch) => {
    const response = await posts.delete('/likes', {post_id, user_id})
    console.log(response)
    dispatch({type: LIKE_DELETE, payload: response})
}
