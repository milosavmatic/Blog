import React from 'react'
import {fetchPending} from '../actions'


const fetchPosts = () =>  dispatch => {
dispatch(fetchPending())
fetch("https://laravel-blog-tritacke.herokuapp.com/api/posts")
.then(res => res.json)
}