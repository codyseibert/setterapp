import axios from "axios";
import { API_URL } from "./config";

export default userId => {
  return axios
    .get(`${API_URL}/v1/sends?userId=${userId}`)
    .then(response => response.data);
};
