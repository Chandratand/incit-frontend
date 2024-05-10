import Navbar from '@/components/Navbar';
import { getAuthSession } from '@/lib/auth';
import { Session } from 'inspector';
import { redirect } from 'next/navigation';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await getAuthSession();
  if (session?.user.isVerified) redirect('/');

  return <div className="bg-muted">{children}</div>;
}
