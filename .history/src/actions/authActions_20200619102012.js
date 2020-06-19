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
                const response = await fetch(`${posts}/login`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: toJson({
                        email: action.payload.email,
                        name: action.payload.name,
                        password: action.payload.password,
                        password2: action.payload.password2,
                    })
                });
                const responseJson = await response.json()
                const { succes, ero}
            }
    }
};

export default UserApi;
