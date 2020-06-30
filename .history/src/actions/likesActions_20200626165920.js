import posts from '../api/posts';
import { LIKE_DELETE, LIKE_POST } from './types';
import { fetchPost } from './postActions';

export const postLike = (post_id) => async (dispatch) => {
    const response = await posts
        .post('/likes', { post_id })
        .catch((err) => console.log(err.response));
    console.log(response);
    dispatch({ type: LIKE_POST, payload: response });
    dispatch(fetchPost(post_id));
    dispatch(deleteLike({post_id, _method: "DELETE"}))
};

export const deleteLike = (post_id) => async (dispatch) => {
    await posts
        .post('/likes', { post_id, _method: 'DELETE' })
        .catch((err) => console.log(err.response));

    dispatch({ type: LIKE_DELETE, payload: post_id });
};
