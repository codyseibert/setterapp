import axios from "axios";
import { API_URL } from "./config";

export default (setterId, props) => {
  return axios
    .patch(`${API_URL}/v1/setters/${setterId}`, props)
    .then(response => response.data);
};
