import posts from '../api/posts';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { SET_CURRENT_USER, GET_ERRORS, USER_LOADING } from './types';

export const registerUser = (userData, history) => (dispatch) => {
    posts
        .post('/register', userData)
        .then((res) => history.push('/login'))
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err.res.data,
            })
        );
};

export const loginUser = (userData) => (dispatch) => {
    posts
        .post('/login', userData)
        .then((res) => {
            const { user,  } = res.data;
            console.log(token);
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch((err) =>
            dispatch({
                type: GET_ERRORS,
                payload: err,
            })
        );
};

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
    };
};

export const setUserLoading = () => {
    return {
        type: USER_LOADING,
    };
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
};
