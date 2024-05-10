'use client';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import api from '@/lib/api';
import Link from 'next/link';

const SignUpPage = () => {
  return (
    <section className="container min-h-screen flex justify-center items-center py-4">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Choose your sign up method</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Link href={process.env.NEXT_PUBLIC_API_URL + 'auth/google'} className={buttonVariants()}>
              Continue with Google
            </Link>
            <Link href={process.env.NEXT_PUBLIC_API_URL + 'auth/facebook'} className={buttonVariants()}>
              Continue with facebook
            </Link>
            <div className="relative flex items-center w-full my-2">
              <div className="flex-grow border-t" />
              <span className="flex-shrink mx-4 text-muted-foreground text-xs font-medium">or sign in with email</span>
              <div className="flex-grow border-t" />
            </div>
            <Link href={'/sign-up/email'} className={buttonVariants({ variant: 'outline' })}>
              Continue with Email
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/sign-in" className="underline">
              Sign In
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SignUpPage;
