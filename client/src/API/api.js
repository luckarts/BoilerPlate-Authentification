import axios from 'axios';

export default {
  user: {
    signup: user => axios.post('api/users/signup', user).then(res => res.data),
    login: user => axios.post('api/users/signin', user).then(res => res.data),
    update: user => axios.post('/api/update', user).then(res => res.data),
    fetchCurrentUser: headers => axios.get('/api/users/me', { headers }).then(res => res.data)
  },
};
