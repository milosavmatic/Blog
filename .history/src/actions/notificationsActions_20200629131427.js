import posts from '../api/posts';
import { FETCH_NOTIFICATIONS, POST_NOTIFICATIONS } from './types';

export const fetchNotifications = () => async (dispatch) => {
    const response = await posts.get('/notifications');
    dispatch({ type: FETCH_NOTIFICATIONS, payload: response.data });
};

export const postNotifications = (id) => async (dispatch) => {
    const response = await posts.post('/notifications');
    dispatch({ type: POST_NOTIFICATIONS, payload: response.data})
}
