// frontend/src/services/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
});

// attach token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default {
  // auth
  login: (username, password) => API.post("/auth/login", { username, password }),
  // products
  getProducts: () => API.get("/products"),
  getProduct: (id) => API.get(`/products/${id}`),
  // cart
  addToCart: (payload) => API.post("/cart/add", payload),
  getCart: (username) => API.get(`/cart/${username}`),
  removeCartItem: (id) => API.delete(`/cart/remove/${id}`),
  // repairs
  submitRepair: (payload) => API.post("/repairs", payload),
  getRepair: (id) => API.get(`/repairs/${id}`),
  adminGetRepairs: () => API.get("/repairs"),
  adminUpdateStatus: (id, status) => API.put(`/admin/repairs/${id}/status`, { status }),
};
