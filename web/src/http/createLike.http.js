import axios from "axios";
import { API_URL } from "./config";

export default like => {
  return axios
    .post(`${API_URL}/v1/likes`, like)
    .then(response => response.data);
};
