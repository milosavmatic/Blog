import posts from '../api/posts';
import { FETCH_NOTIFICATIONS } from './types';

export const fetchNotifications = () => async (dispatch) => {
    const response = await posts.get('/notifications');
   
    dispatch({
        type: FETCH_NOTIFICATIONS,
        payload: response.data.notifications,
    });
};
