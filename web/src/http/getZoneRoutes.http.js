import axios from "axios";
import { API_URL } from "./config";

export default zoneId => {
  return axios
    .get(`${API_URL}/v1/routes?zoneId=${zoneId}`)
    .then(response => response.data);
};
