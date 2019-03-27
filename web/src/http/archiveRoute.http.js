import axios from "axios";
import { API_URL } from "./config";

export default routeId => {
  return axios
    .post(`${API_URL}/v1/routes/${routeId}/archive`)
    .then(response => response.data);
};
