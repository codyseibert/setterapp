import axios from "axios";
import { API_URL } from "./config";

export default credentials => {
  return axios
    .post(`${API_URL}/v1/login`, credentials)
    .then(response => response.data);
};
