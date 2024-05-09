'use client';

import { setAuth } from '@/actions/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import api from '@/lib/api';
import { errorHandler } from '@/lib/handler/errorHandler';
import { SignInValidator } from '@/lib/validator/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const SignInPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof SignInValidator>>({
    resolver: zodResolver(SignInValidator),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInValidator>) => {
    try {
      setIsLoading(true);
      const res = await api.post('auth/sign-in', data);
      setAuth(res.data.data);
      toast.success('SignIn Success!');
      router.replace('/dashboard');
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container min-h-screen flex justify-center items-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
            <Button variant="outline" className="w-full">
              Login with facebook
            </Button>
          </div>
          <div className="relative flex items-center w-full my-4">
            <div className="flex-grow border-t" />
            <span className="flex-shrink mx-4 text-muted-foreground text-xs font-medium">or sign in with email</span>
            <div className="flex-grow border-t" />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Email" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Input Password" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <Button type="submit" className="w-full" isLoading={isLoading}>
                  Login
                </Button>
              </div>
            </form>
          </Form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link href="/sign-up" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignInPage;
