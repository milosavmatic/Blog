import {
    API_CREATE_USER_REQUEST,
    API_LOGIN_REQUEST,
    API_LOGIN_REQUEST_SUCCESS,
    API_CREATE_USER_REQUEST_SUCCESS,
} from './types';
import posts from '../api/posts';

const UserApi = ({ dispatch, getState }) => (next) => async (action) => {
    const state = getState();
    switch (action.type) {
        case API_CREATE_USER_REQUEST:
            try {
                const response = await fetch(`${posts}/login`,
                method: 'POST',)
            }
    }
};

export default UserApi;
