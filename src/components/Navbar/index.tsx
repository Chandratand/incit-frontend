import { getAuthSession } from '@/lib/auth';
import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { AccountDropdown } from './AccountDropDown';

const Navbar = async () => {
  const auth = await getAuthSession();
  return (
    <nav className="w-full border-b bg-background p-3 flex justify-between">
      <Link href={'/dashboard'} className={buttonVariants({ variant: 'link' })}>
        Dashboard
      </Link>
      <AccountDropdown user={auth?.user || null} />
    </nav>
  );
};

export default Navbar;
