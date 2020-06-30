import posts from '../api/posts'
import { POST_COMMENTS } from './types'




export const postComments = (commentsData, post_id) => (dispatch) =>  {
const response =  posts.post('/comments', commentsData, post_id)
} 