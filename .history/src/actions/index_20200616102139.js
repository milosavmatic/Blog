import { ADD_COMMENT } from './types'

const addComment = (text) => {
    type: ADD_COMMENT,
    payload: text
}