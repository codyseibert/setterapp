import axios from "axios";
import { API_URL } from "./config";

export default message => {
  return axios
    .post(`${API_URL}/v1/comments`, message)
    .then(response => response.data);
};
