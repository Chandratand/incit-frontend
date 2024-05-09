import { getAuth } from '@/actions/auth';
import Navbar from '@/components/Navbar';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const auth = await getAuth();
  if (!auth?.token) redirect('/');
  if (!auth?.user.isVerified) redirect('/verify-email');

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
