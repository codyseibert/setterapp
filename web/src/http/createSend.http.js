import axios from "axios";
import { API_URL } from "./config";

export default send => {
  return axios
    .post(`${API_URL}/v1/sends`, send)
    .then(response => response.data);
};
