import axios from "axios";
import { API_URL } from "./config";

export default gymId => {
  return axios
    .get(`${API_URL}/v1/zones?gymId=${gymId}`)
    .then(response => response.data);
};
