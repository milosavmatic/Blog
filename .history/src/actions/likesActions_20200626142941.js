import posts from '../api/posts';
import { LIKE_DELETE, LIKE_POST } from './types';

export const postLike = (counterLike) => async (dispatch) => {
    const response = await posts.post('/likes', counterLike);
    console.log(response.data);
    dispatch({ type: LIKE_POST, payload: response.data });
};
