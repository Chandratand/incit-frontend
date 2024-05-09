/* eslint-disable no-param-reassign */
import axios from 'axios';

const isServer = typeof window === 'undefined';
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwibmFtZSI6ImFzZGEiLCJlbWFpbCI6ImVtYWlsQGdtYWlsLmNvbSIsImlzVmVyaWZpZWQiOnRydWUsInNpZ25VcE1ldGhvZCI6bnVsbCwiaWF0IjoxNzE1MjU0MTg4LCJleHAiOjE3MTUyNTc3ODh9.OkBlxXB6opW2h9irjRoK7hhTVMtidD7C8AZVAwnE64g';
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
