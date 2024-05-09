'use server';

import { Auth, User } from '@/types';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function setAuth({ token, user }: Auth) {
  const authData = { token, user };
  const authDataString = JSON.stringify(authData);
  const encodedData = Buffer.from(authDataString).toString('base64');

  setCookie('authData', encodedData, { cookies, httpOnly: true, maxAge: 3600 }); // Expires in 10 minutes
  return true;
}

export async function getAuth(): Promise<Auth | null> {
  const encodedData = getCookie('authData', { cookies });
  if (encodedData) {
    const decodedData = Buffer.from(encodedData, 'base64').toString('ascii');
    return JSON.parse(decodedData);
  }
  return null;
}

export async function signOut() {
  deleteCookie('authData', { cookies });
  redirect('/');
}
