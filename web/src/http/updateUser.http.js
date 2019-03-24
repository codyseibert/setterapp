import axios from "axios";
import { API_URL } from "./config";

export default (userId, properties) => {
  return axios
    .patch(`${API_URL}/v1/users/${userId}`, properties)
    .then(response => response.data);
};
