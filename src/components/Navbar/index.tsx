import { getAuth } from '@/actions/auth';
import { AccountDropdown } from './AccountDropDown';

const Navbar = async () => {
  const auth = await getAuth();
  return (
    <nav className="w-full border-b bg-background p-3 flex justify-end">
      <AccountDropdown user={auth.user} />
    </nav>
  );
};

export default Navbar;
