import { Link } from 'react-router-dom';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import LogoIcon from '../../images/logo/logo-icon.svg';
import { NavLink, useLocation } from 'react-router-dom';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <header className="sticky top-0 z-999 flex w-full h-24 bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 shadow-2 md:px-6">
        <div className="hidden sm:block bg-orange-400 text-white px-20 text-2xl py-3 font-bold rounded-xl">
          Logo
        </div>
        <div className='flex gap-8'>
          <NavLink
            to="/dashboard"
            className={`group relative flex items-center gap-2.5 py-2 px-4 font-medium duration-300 ease-in-out hover:border-orange-400 border-b-4
                    ${pathname.includes('dashboard') && ' border-orange-400'}
                    ${!pathname.includes('dashboard') && 'border-transparent'}`}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/myvehicle"
            className={`group relative flex items-center gap-2.5 py-2 px-4 font-medium duration-300 ease-in-out hover:border-orange-400 border-b-4
                    ${pathname.includes('myvehicle') && 'border-orange-400'}
                    ${!pathname.includes('myvehicle') && 'border-transparent'}`}
          >
            My Vehicle
          </NavLink>
          <NavLink
            to="/myprofile"
            className={`group relative flex items-center gap-2.5 py-2 px-4 font-medium duration-300 ease-in-out hover:border-orange-400 border-b-4
                    ${pathname.includes('myprofile') && 'border-orange-400'}
                    ${!pathname.includes('myprofile') && 'border-transparent'}`}
          >
            My Profile
          </NavLink>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}

          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
