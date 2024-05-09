/* eslint-disable no-param-reassign */
import { getAuth } from '@/actions/auth';
import axios from 'axios';

const isServer = typeof window === 'undefined';
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    const auth = await getAuth();
    if (auth?.token) {
      const token = auth?.token;
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
