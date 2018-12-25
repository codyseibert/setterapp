import axios from "axios";
import { API_URL } from "./config";

export const registerGym = gym => {
  console.log("here", `${API_URL}/v1/gyms`);
  return axios.post(`${API_URL}/v1/gyms`, gym);
};
