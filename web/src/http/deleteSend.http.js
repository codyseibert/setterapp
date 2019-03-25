import axios from "axios";
import { API_URL } from "./config";

export default sendId => {
  return axios
    .delete(`${API_URL}/v1/sends/${sendId}`)
    .then(response => response.data);
};
