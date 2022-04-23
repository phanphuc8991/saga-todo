import axios from "axios";
import queryString from "query-string";
const token = () => {
  console.log("run....new new new");
  return localStorage.getItem("access_token");
};
const axiosClientToken = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
    token: `Bearer ${token}`,
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientToken.interceptors.response.use(
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

export default axiosClientToken;
