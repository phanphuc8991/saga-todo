import axiosClient from "./axiosClient";

const todoApi = {
  getAll: (params) => {
    const url = "/todo";
    return axiosClient.get(url, { params });
  },
  get: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = "/todo";
    return axiosClient.post(url, data);
  },
  update: (id, data) => {
    const url = `/todo/${id}`;
    return axiosClient.put(url, data);
  },
  delete: (id) => {
    const url = `/todo/${id}`;
    return axiosClient.delete(url);
  },
};

export default todoApi;
