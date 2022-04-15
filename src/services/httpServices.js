import axios from "axios";
axios.defaults.baseURL = "http://xoosha.com/ws/1/test.php?offset=1";
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
