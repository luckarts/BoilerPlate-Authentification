import axios from "axios";

export default {
  user: {
    signup: user => axios.post("/user/signup", user).then(res => res.data)
  }
};
