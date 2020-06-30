import posts from '../api/posts'
import { LIKE_DELETE, LIKE_POST } from './types'


const postLike = (counterLike) => async (dispatch) => {
    const response = await posts.post("/likes", counterLike)
    dispatch({type: LIKE_POST, payload: response.data})
}