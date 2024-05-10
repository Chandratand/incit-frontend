import { getAuthSession } from '@/lib/auth';
import { AccountDropdown } from './AccountDropDown';

const Navbar = async () => {
  const auth = await getAuthSession();
  return (
    <nav className="w-full border-b bg-background p-3 flex justify-end">
      <AccountDropdown user={auth?.user || null} />
    </nav>
  );
};

export default Navbar;
