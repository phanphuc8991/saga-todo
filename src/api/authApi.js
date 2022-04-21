import axiosClient from "./axiosClient";
const authApi = {
  login: (user) => {
    const url = "/auth/login";
    return axiosClient.post(url, user);
  },
};

export default authApi;
