import axios from "axios";
import { API_URL } from "./config";

export default route => {
  return axios
    .post(`${API_URL}/v1/routes`, route)
    .then(response => response.data);
};
