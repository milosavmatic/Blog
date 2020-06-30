import posts from '../api/posts'
import { POST_COMMENTS } from './types'




export const postComments = (commentsData) => async (dispatch) =>  {
const response = await posts.post('/comments', commentsData)
dispatch({type: POST_COMMENTS, payload: response.data})
} 