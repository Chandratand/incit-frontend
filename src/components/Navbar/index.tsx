import { AccountDropdown } from './AccountDropDown';

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-background p-3 flex justify-end">
      <AccountDropdown />
    </nav>
  );
};

export default Navbar;
