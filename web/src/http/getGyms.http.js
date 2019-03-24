import axios from "axios";
import { API_URL } from "./config";

export default () => {
  return axios.get(`${API_URL}/v1/gyms`).then(response => response.data);
};
