import {
    API_CREATE_USER_REQUEST,
    API_LOGIN_REQUEST,
    API_CREATE_USER_REQUEST,
    API_CREATE_USER_REQUEST_SUCCESS,
} from './types';
import posts from '../api/posts';

const UserApi = ({ dispatch, getState }) => (next) => async (action) => {
    const state = getState()
};


export default UserApi