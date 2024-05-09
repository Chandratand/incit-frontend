import { Button } from '@/components/ui/button';

const VerifyEmailPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-lg text-center px-4">Please verify your email address to access the dashboard. Click the button below to resend the verification email.</p>
      <Button>Resend Email Verification</Button>
    </section>
  );
};

export default VerifyEmailPage;
