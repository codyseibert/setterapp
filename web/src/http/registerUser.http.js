import axios from "axios";
import { API_URL } from "./config";

export default user => {
  return axios.post(`${API_URL}/v1/users`, user);
};
