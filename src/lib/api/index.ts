/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getSession } from 'next-auth/react';
import { getAuthSession } from '../auth';

const isServer = typeof window === 'undefined';
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    let session;
    if (isServer) {
      session = await getAuthSession();
    } else {
      session = await getSession();
    }
    if (session) {
      config.headers.Authorization = `Bearer ${session.user.token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
