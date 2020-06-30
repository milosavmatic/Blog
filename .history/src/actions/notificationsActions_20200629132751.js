import posts from '../api/posts';
import { FETCH_NOTIFICATIONS, POST_NOTIFICATIONS } from './types';

export const fetchNotifications = () => async (dispatch) => {
    const response = await posts.get('/notifications');
    console.log(response.data)
    dispatch({ type: FETCH_NOTIFICATIONS, payload: response.data });
};

export const postNotifications = (id) => async (dispatch) => {
    const response = await posts.post(`/notifications/${id}`);
    console.log(response.data)
    dispatch({ type: POST_NOTIFICATIONS, payload: response.data });
};
