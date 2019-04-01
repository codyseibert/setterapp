import axios from "axios";
import { API_URL } from "./config";

export default routeId => {
  return axios
    .get(`${API_URL}/v1/sends?routeId=${routeId}`)
    .then(response => response.data);
};
