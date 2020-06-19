import React from 'react';
import { fetchPending, fetchPosts, fetchError } from '../actions';

const fetchesPost = () => (dispatch) => {
    return(
    dispatch(fetchPending()),
    fetch('https://laravel-blog-tritacke.herokuapp.com/api/posts').then((res) =>
        res
            .json()
            .then((res) => {
                if (res.error) {
                    throw res.error;
                }
                console.log(res.data);
                dispatch(fetchPosts(res.data));
                return res.data;
            })
            .catch((error) => fetchError(error))
    );
    )
};

export default fetchError;
