import axios from "axios";
axios.defaults.baseURL = "https://xoosha.com/ws/1/test.php/";
const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
