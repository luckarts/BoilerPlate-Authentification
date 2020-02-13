import axios from 'axios';
const config = { headers: { 'Content-Type': 'multipart/form-data' } };
export default {
  user: {
    signup: user => axios.post('api/users/signup', user).then(res => res.data),
    login: user => axios.post('api/users/signin', user).then(res => res.data),
    update: user => axios.put(`/api/users/update/${user.id}`, user.formdata).then(res => res.data),
    fetchCurrentUser: headers => axios.get('/api/users/me', { headers }).then(res => res.data)
  },
};
