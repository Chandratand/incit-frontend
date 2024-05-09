import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const HomePage = () => {
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
