'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import useAuth from '@/hooks/useAuth';
import api from '@/lib/api';
import { errorHandler } from '@/lib/handler/errorHandler';
import { UpdateProfileValidator } from '@/lib/validator/profile';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ProfilePage = () => {
  const auth = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UpdateProfileValidator>>({
    resolver: zodResolver(UpdateProfileValidator),
    defaultValues: {
      email: 'email@gmail.com',
      name: '',
    },
  });

  useEffect(() => {
    if (auth?.user) {
      form.reset({ name: auth.user.name, email: auth.user.email });
    }
  }, [auth, form]);

  const onSubmit = async (data: z.infer<typeof UpdateProfileValidator>) => {
    try {
      setIsLoading(true);
      const res = await api.put('auth/profile', { name: data.name });
      toast.success('Profile Updated!');
      router.push('/dashboard');
    } catch (error) {
      errorHandler(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!auth) return null;

  return (
    <section className="container min-h-[calc(100vh-60px)] flex justify-center items-center">
      <Card className="mx-auto w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Your Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input disabled placeholder="Enter Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Input Name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <Button type="submit" className="w-full" isLoading={isLoading}>
                  Update Profile
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProfilePage;
