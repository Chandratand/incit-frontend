'use client';

import { Button } from '@/components/ui/button';
import api from '@/lib/api';
import { errorHandler } from '@/lib/handler/errorHandler';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const ResendEmailPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, update, status } = useSession();

  useEffect(() => {
    if (session?.user.isVerified) {
      router.replace('/dashboard');
    }
  }, [session, router]);

  const checkStatus = async () => {
    try {
      const res = await api.get('auth/verification-status');
      if (res.data.data.user.isVerified) {
        await update({ token: res.data.data.token, ...res.data.data.user });
        toast.success('Email Verified!');
      } else {
        toast.error('Email is not Verified!');
      }
    } catch (error) {
      errorHandler(error);
    }
  };

  const resend = async () => {
    try {
      setIsLoading(true);
      await api.post('auth/resend-email');
      toast.success('Email Sent! check your inbox');
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-lg text-center px-4">Please verify your email address to access the dashboard. Click the button below to resend the verification email.</p>
      <Button onClick={checkStatus} variant={'outline'} isLoading={isLoading} disabled={status === 'loading'}>
        Check Status Verification
      </Button>
      <Button onClick={resend} isLoading={isLoading}>
        Resend Email Verification
      </Button>
    </section>
  );
};

export default ResendEmailPage;
