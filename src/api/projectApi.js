import { userAxiosClient } from "./axiosClient";
const projectApi = {
  getAll: (params) => {
    const url = "/project";
    return userAxiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/project/${id}`;
    return userAxiosClient.get(url);
  },
  create: (data) => {
    const url = "/project";
    return userAxiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `/project/${id}`;
    return userAxiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `/project/${id}`;
    return userAxiosClient.delete(url);
  },
};

export default projectApi;
