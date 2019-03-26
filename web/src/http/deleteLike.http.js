import axios from "axios";
import { API_URL } from "./config";

export default likeId => {
  return axios
    .delete(`${API_URL}/v1/likes/${likeId}`)
    .then(response => response.data);
};
