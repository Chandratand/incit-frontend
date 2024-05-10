import { verifyEmail } from '@/actions/user';
import { CircleCheck, CircleX } from 'lucide-react';
import { redirect } from 'next/navigation';

const VerifyEmailPage = async ({ searchParams }: { searchParams: { token: string } }) => {
  const { token } = searchParams;
  if (!token) redirect('/');

  const res = await verifyEmail(token);

  return (
    <section>
      <section className="flex flex-col justify-center items-center min-h-screen text-xl font-semibold text-primary gap-4">
        {res ? (
          <>
            <CircleCheck size={60} />
            <p>Email verification successful. You can now log in to your account.</p>
          </>
        ) : (
          <>
            <CircleX size={60} className="text-destructive" />
            <p className="text-destructive">Verification Fail</p>
          </>
        )}
      </section>
    </section>
  );
};

export default VerifyEmailPage;
