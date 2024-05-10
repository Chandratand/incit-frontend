import { buttonVariants } from '@/components/ui/button';
import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const HomePage = async () => {
  const session = await getAuthSession();
  if (session?.user.isVerified) redirect('/dashboard');

  return (
    <section className="min-h-screen flex justify-center items-center gap-4">
      <Link href={'/sign-in'} className={buttonVariants()}>
        Sign In
      </Link>
      <Link href={'/sign-up'} className={buttonVariants({ variant: 'outline' })}>
        Sign Up
      </Link>
    </section>
  );
};

export default HomePage;
