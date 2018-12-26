import axios from "axios";
import { API_URL } from "./config";

export default info => {
  return axios
    .post(`${API_URL}/v1/gym-admins`, info)
    .then(response => response.data);
};
