'use client';
import api from '@/lib/api';
import { errorHandler } from '@/lib/handler/errorHandler';
import { CircleCheck, CircleX, Loader2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef, useState } from 'react';

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const { data: session, update, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const didRunOnce = useRef(false);
  const router = useRouter();

  const handleVerifyToken = async (token: string | null) => {
    try {
      if (!token) throw new Error('Verification Fail!');
      setIsLoading(true);
      const res = await api.post('users/verify-email?token=' + token);
      if (!res.data.data) throw new Error('Verification Fail!');
      await update({ token: res.data.data.token, ...res.data.data.user });
      setSuccess(true);
      setTimeout(() => {
        router.replace('/dashboard');
      }, 3000);
      return true;
    } catch (error) {
      setSuccess(false);
      errorHandler(error);
    } finally {
      didRunOnce.current = true;
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!didRunOnce.current && searchParams.get('token') && status !== 'loading') {
      if (session?.user.isVerified) return router.replace('/dashboard');
      handleVerifyToken(searchParams.get('token'));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams, status]);

  if (isLoading)
    return (
      <section className="flex justify-center items-center min-h-screen">
        <Loader2 size={60} className="mr-2 animate-spin" />
      </section>
    );

  return (
    <section className="flex flex-col justify-center items-center min-h-screen text-xl font-semibold text-primary gap-4">
      {success ? (
        <>
          <CircleCheck size={60} />
          <p>Email verification successful. You can now log in to your account.</p>
          <p>Redirect in 3 seconds...</p>
        </>
      ) : (
        <>
          <CircleX size={60} className="text-destructive" />
          <p className="text-destructive">Verification Fail</p>
        </>
      )}
    </section>
  );
};

const VerifyEmailPage = () => {
  return (
    <Suspense>
      <VerifyEmail />
    </Suspense>
  );
};

export default VerifyEmailPage;
