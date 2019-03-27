import axios from "axios";
import { API_URL } from "./config";

export default notificationId => {
  return axios
    .delete(`${API_URL}/v1/notifications/${notificationId}`)
    .then(response => response.data);
};
