import axios from 'axios';

export default {
  user: {
    signup: user => axios.post('api/users/signup', user).then(res => res.data),
  },
};
