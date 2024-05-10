'use server';
import api from '@/lib/api';
import { UserList, UserStats } from '@/types';

export const fetchUsers = async (): Promise<UserList[]> => {
  const res = await api.get('users');
  return res.data.data;
};

export const fetchUserStats = async (): Promise<UserStats> => {
  const res = await api.get('users/stats');
  return res.data.data;
};

export const verifyEmail = async (token: string) => {
  try {
    const res = await api.post('users/verify-email?token=' + token);
    if (res.data.data) return true;
    return false;
  } catch (error) {
    return false;
  }
};
