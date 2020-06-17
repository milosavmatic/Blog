import { ADD_COMMENT } from './types'

const addComment = (text) => {
    return {
    type: ADD_COMMENT,
    payload: text
    }
}