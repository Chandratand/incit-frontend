'use client';

import { getAuth } from '@/actions/auth';
import { Auth } from '@/types';
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    const fetchAuth = async () => {
      const res = await getAuth();
      setAuth(res);
    };

    fetchAuth();
  }, []);

  return auth;
};

export default useAuth;
