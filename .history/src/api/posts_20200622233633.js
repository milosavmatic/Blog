import axios from 'axios';

export default axios.create({
    baseURL: 'https://laravel-blog-tritacke.herokuapp.com/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        'content-type': 'application/json',
    },
});
