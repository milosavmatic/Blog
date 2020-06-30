import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

setAuthToken(localStorage.jwtToken);

export default axios.create({
    baseURL: 'https://laravel-blog-tritacke.herokuapp.com/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        'content-type': 'application/json',
    },
});
