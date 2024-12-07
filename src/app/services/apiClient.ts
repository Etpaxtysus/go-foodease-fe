import axios from 'axios'

export type ResponseSchema<T> = {
  status: "success" | "error";
  message: string;
  data: T;
}

const apiClient = axios.create({
  // baseURL: "https://plankton-app-uwgos.ondigitalocean.app/api/v1",
  baseURL: "http://localhost:8888/api/"
});

export default apiClient;