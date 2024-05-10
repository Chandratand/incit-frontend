import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { AccountDropdown } from './AccountDropDown';

const Navbar = async () => {
  return (
    <nav className="w-full border-b bg-background p-3 flex justify-between">
      <Link href={'/dashboard'} className={buttonVariants({ variant: 'link' })}>
        Dashboard
      </Link>
      <AccountDropdown />
    </nav>
  );
};

export default Navbar;
