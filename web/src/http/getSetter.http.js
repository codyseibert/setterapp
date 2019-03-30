import axios from "axios";
import { API_URL } from "./config";

export default setterId => {
  return axios
    .get(`${API_URL}/v1/setters/${setterId}`)
    .then(response => response.data);
};
