import api from "./axiosClient";

export const fetchMain = () => api.get("/main");
export const createMain = (data) => api.post("/main", data);
export const updateMain = (id, data) => api.put(`/main/${id}`, data);
export const deleteMain = (id) => api.delete(`/main/${id}`);
