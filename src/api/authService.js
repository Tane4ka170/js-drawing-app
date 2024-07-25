import axios from "axios";

const API_URL = "https://bsp-mini-chat-backend.onrender.com";

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, {
    username,
    password,
  });
  if (response.data.access_token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
