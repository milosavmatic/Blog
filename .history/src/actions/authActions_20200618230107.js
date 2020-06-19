
import posts from '../api/posts';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

export const registerUser = (userData, history) => (dispatch) => {
 
        posts.post('/users/register', userData)
        .then(res => history.push('/login'))
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data,
            })
        );
};
