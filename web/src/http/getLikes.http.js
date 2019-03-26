import axios from "axios";
import { API_URL } from "./config";

export default params => {
  return axios
    .get(`${API_URL}/v1/likes`, {
      params
    })
    .then(response => response.data);
};
