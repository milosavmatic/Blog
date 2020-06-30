import posts from '../api/posts';
import { LIKE_DELETE, LIKE_POST } from './types';

export const postLike = (post_id) => async (dispatch) => {
    const response = await posts
        .post('/likes', post_id)
        .catch((err) => console.log(err));
    console.log(response.data);
    dispatch({ type: LIKE_POST, payload: response });
};
