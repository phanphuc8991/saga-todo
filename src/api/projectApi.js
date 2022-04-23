import axiosClient from "./axiosClient";

const projectApi = {
  getAll: (params) => {
    const url = "/project";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/project/${id}`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = "/project";
    return axiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `/project/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `/project/${id}`;
    return axiosClient.delete(url);
  },
};

export default projectApi;
