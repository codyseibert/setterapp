import axios from "axios";
import { API_URL } from "./config";

export default setter => {
  return axios
    .post(`${API_URL}/v1/setters`, setter)
    .then(response => response.data);
};
