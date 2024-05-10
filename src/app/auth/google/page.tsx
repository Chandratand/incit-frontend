'use client';
import { setAuth } from '@/actions/auth';
import api from '@/lib/api';
import { errorHandler } from '@/lib/handler/errorHandler';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';
import { toast } from 'sonner';

const GoogleCallback = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const hasRun = useRef(false);

  useEffect(() => {
    const handleCallback = async (code: string | null) => {
      if (code && !hasRun.current) {
        hasRun.current = true;
        try {
          const res = await api.get(`auth/google/callback?code=${code}`);
          await setAuth(res.data.data);
          toast.success('SignIn Success!');
          router.replace('/dashboard');
        } catch (error) {
          errorHandler(error);
          router.replace('/');
        }
      } else if (!code) {
        router.replace('/');
      }
    };

    const code = searchParams.get('code');
    handleCallback(code);
  }, [searchParams, router]);

  return null;
};

function GoogleCallbackPage() {
  return (
    <Suspense>
      <GoogleCallback />
    </Suspense>
  );
}

export default GoogleCallbackPage;
