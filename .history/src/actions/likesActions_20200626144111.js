import posts from '../api/posts';
import { LIKE_DELETE, LIKE_POST } from './types';

export const postLike = (counterLike) => async (dispatch) => {
    const response = await posts
        .post('/likes', counterLike)
        .catch((err) => console.log(err));
    console.log(response);
    dispatch({ type: LIKE_POST, payload: response });
};
