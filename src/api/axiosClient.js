import axios from "axios";
import queryString from "query-string";

const token = () => localStorage.getItem("access_token");
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // if (currentUser) {
  //   const token = await currentUser.getIdToken();
  // }
  if (token()) {
    config.headers.token = `Bearer ${token()}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
