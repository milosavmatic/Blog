import React from 'react'
import {fetchPending} from '../actions'


const fetchPosts = () =>  dispatch => {
dispatch(fetchPending())

}