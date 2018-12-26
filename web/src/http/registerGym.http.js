import axios from "axios";
import { API_URL } from "./config";

export default gym => {
  return axios.post(`${API_URL}/v1/gyms`, gym).then(response => response.data);
};
