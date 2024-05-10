'use client';

import { getAuth, setAuth } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import api from '@/lib/api';
import { errorHandler } from '@/lib/handler/errorHandler';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const ResendEmailPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        const auth = await getAuth();
        if (auth?.user.isVerified) router.replace('/dashboard');
        const res = await api.get('auth/verification-status');
        if (res.data.data.user.isVerified) {
          await setAuth(res.data.data);
          router.replace('/dashboard');
        }
      } catch (error) {
        errorHandler(error);
      }
    };

    fetchAuth();
  }, [router]);

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
      <Button onClick={resend} isLoading={isLoading}>
        Resend Email Verification
      </Button>
    </section>
  );
};

export default ResendEmailPage;
