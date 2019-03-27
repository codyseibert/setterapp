import axios from "axios";
import { API_URL } from "./config";

export default commentId => {
  return axios
    .delete(`${API_URL}/v1/comments/${commentId}`)
    .then(response => response.data);
};
