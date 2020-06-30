import posts from '../api/posts';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt_decode';

import { SET_CURRENT_USER, GET_ERRORS, USER_LOADING } from './types';

export const registerUser = (userData, history) => (dispatch) => {
    posts.post('/register', userData);
};
