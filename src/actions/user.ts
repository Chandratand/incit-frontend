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
