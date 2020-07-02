import axios from 'axios';

export default const posts = () => {axios.create({
    baseURL: 'https://laravel-blog-tritacke.herokuapp.com/api',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
        'content-type': 'application/json',
    },
})
}
