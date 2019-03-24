import axios from "axios";
import { API_URL } from "./config";

export default zone => {
  return axios
    .post(`${API_URL}/v1/zones`, zone)
    .then(response => response.data);
};
