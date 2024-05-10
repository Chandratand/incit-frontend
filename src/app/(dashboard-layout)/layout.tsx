import Navbar from '@/components/Navbar';
import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const auth = await getAuthSession();
  if (!auth) redirect('/');
  if (!auth.user.isVerified) redirect('/resend-email');

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
