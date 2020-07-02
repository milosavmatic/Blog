import posts from "../api/posts";
import { FETCH_NOTIFICATIONS } from "./types";

export const fetchNotifications = () => async (dispatch) => {
<<<<<<< HEAD
    const response = await posts.get('/notifications');
    dispatch({
        type: FETCH_NOTIFICATIONS,
        payload: response.data.notifications,
    });
=======
  const response = await posts().get("/notifications");
  console.log(response.data.notifications);
  dispatch({
    type: FETCH_NOTIFICATIONS,
    payload: response.data.notifications,
  });
>>>>>>> 8eb2843e5d1d3cb59b3dc0ebad9f086f5f6d366e
};
