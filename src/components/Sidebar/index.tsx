import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-24 z-10 flex w-60 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2 py-4 px-4 lg:mt-3 lg:px-6">
          {/* <!-- Menu Group --> */}
          <div>

            <ul className="mb-6 flex flex-col gap-6">
              {/* <!-- Menu Item Dashboard --> */}
              <li>
                <NavLink
                  to="/dashboard"
                  className={`rounded-lg group relative flex items-center gap-2.5 py-2 px-4 font-medium duration-300 ease-in-out hover:bg-orange-400 hover:text-white 
                    ${pathname.includes('dashboard') && 'bg-orange-400 text-white'}
                    ${!pathname.includes('dashboard') && 'text-black'}`}
                >
                  <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.10322 0.956299H2.53135C1.5751 0.956299 0.787598 1.7438 0.787598 2.70005V6.27192C0.787598 7.22817 1.5751 8.01567 2.53135 8.01567H6.10322C7.05947 8.01567 7.84697 7.22817 7.84697 6.27192V2.72817C7.8751 1.7438 7.0876 0.956299 6.10322 0.956299ZM6.60947 6.30005C6.60947 6.5813 6.38447 6.8063 6.10322 6.8063H2.53135C2.2501 6.8063 2.0251 6.5813 2.0251 6.30005V2.72817C2.0251 2.44692 2.2501 2.22192 2.53135 2.22192H6.10322C6.38447 2.22192 6.60947 2.44692 6.60947 2.72817V6.30005Z" fill=""></path>
                    <path d="M15.4689 0.956299H11.8971C10.9408 0.956299 10.1533 1.7438 10.1533 2.70005V6.27192C10.1533 7.22817 10.9408 8.01567 11.8971 8.01567H15.4689C16.4252 8.01567 17.2127 7.22817 17.2127 6.27192V2.72817C17.2127 1.7438 16.4252 0.956299 15.4689 0.956299ZM15.9752 6.30005C15.9752 6.5813 15.7502 6.8063 15.4689 6.8063H11.8971C11.6158 6.8063 11.3908 6.5813 11.3908 6.30005V2.72817C11.3908 2.44692 11.6158 2.22192 11.8971 2.22192H15.4689C15.7502 2.22192 15.9752 2.44692 15.9752 2.72817V6.30005Z" fill=""></path>
                    <path d="M6.10322 9.92822H2.53135C1.5751 9.92822 0.787598 10.7157 0.787598 11.672V15.2438C0.787598 16.2001 1.5751 16.9876 2.53135 16.9876H6.10322C7.05947 16.9876 7.84697 16.2001 7.84697 15.2438V11.7001C7.8751 10.7157 7.0876 9.92822 6.10322 9.92822ZM6.60947 15.272C6.60947 15.5532 6.38447 15.7782 6.10322 15.7782H2.53135C2.2501 15.7782 2.0251 15.5532 2.0251 15.272V11.7001C2.0251 11.4188 2.2501 11.1938 2.53135 11.1938H6.10322C6.38447 11.1938 6.60947 11.4188 6.60947 11.7001V15.272Z" fill=""></path>
                    <path d="M15.4689 9.92822H11.8971C10.9408 9.92822 10.1533 10.7157 10.1533 11.672V15.2438C10.1533 16.2001 10.9408 16.9876 11.8971 16.9876H15.4689C16.4252 16.9876 17.2127 16.2001 17.2127 15.2438V11.7001C17.2127 10.7157 16.4252 9.92822 15.4689 9.92822ZM15.9752 15.272C15.9752 15.5532 15.7502 15.7782 15.4689 15.7782H11.8971C11.6158 15.7782 11.3908 15.5532 11.3908 15.272V11.7001C11.3908 11.4188 11.6158 11.1938 11.8971 11.1938H15.4689C15.7502 11.1938 15.9752 11.4188 15.9752 11.7001V15.272Z" fill=""></path>
                  </svg>
                  Dashboard
                </NavLink>
              </li>
              {/* <!-- Menu Item Dashboard --> */}

              {/* <!-- Menu Item MyProfile --> */}
              <li>
                <NavLink
                  to="/myvehicle"
                  className={`group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium duration-300 ease-in-out hover:bg-orange-400 hover:text-white 
                    ${pathname.includes('myvehicle') && 'bg-orange-400 text-white'}
                    ${!pathname.includes('myvehicle') && 'text-black'}`}
                >
                  <svg
                    className="fill-current"
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    transform="matrix(1, 0, 0, 1, 0, 0)">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M487.1,14.065c0-0.1,0-0.2,0-0.4c0-0.3-0.1-0.5-0.1-0.8c0-0.2,0-0.4-0.1-0.6c0-0.2-0.1-0.4-0.1-0.5 c-0.1-0.2-0.1-0.5-0.2-0.7c0-0.1-0.1-0.2-0.1-0.4c-0.1-0.3-0.2-0.6-0.3-0.9c0-0.1-0.1-0.1-0.1-0.2c-0.1-0.3-0.3-0.7-0.5-1 c0-0.1-0.1-0.2-0.1-0.2c-0.2-0.3-0.3-0.6-0.5-0.9c-0.7-1-1.5-1.9-2.4-2.7c-3.7-4.2-9.8-5.9-15.3-3.6L8.4,190.765 c-0.1,0.1-0.3,0.1-0.4,0.2c-0.3,0.1-0.5,0.2-0.8,0.4c-0.2,0.1-0.4,0.2-0.6,0.3s-0.4,0.2-0.6,0.4c-0.2,0.1-0.4,0.3-0.6,0.4 c-0.2,0.1-0.3,0.2-0.5,0.4c-0.2,0.1-0.3,0.3-0.5,0.5c-0.2,0.1-0.3,0.3-0.5,0.4c-0.2,0.2-0.3,0.3-0.5,0.5c-0.1,0.2-0.3,0.3-0.4,0.5 c-0.1,0.2-0.3,0.4-0.4,0.5c-0.1,0.2-0.3,0.3-0.4,0.5c-0.1,0.2-0.3,0.4-0.4,0.6c-0.1,0.2-0.2,0.3-0.3,0.5c-0.2,0.3-0.3,0.6-0.4,0.9 c0,0.1-0.1,0.2-0.2,0.3l0,0c-0.2,0.4-0.3,0.8-0.4,1.2c0,0,0,0,0,0.1c-0.1,0.4-0.2,0.8-0.3,1.3c0,0.2-0.1,0.4-0.1,0.6 c0,0.2-0.1,0.5-0.1,0.7s0,0.4,0,0.6c0,0.2,0,0.5,0,0.7s0,0.4,0,0.6c0,0.2,0,0.5,0,0.7s0.1,0.4,0.1,0.5c0,0.3,0.1,0.5,0.1,0.8 c0.1,0.3,0.1,0.6,0.2,0.9c0.1,0.2,0.1,0.4,0.2,0.6c0.1,0.3,0.2,0.7,0.4,1l0,0c0.1,0.4,0.3,0.7,0.5,1c0,0.1,0.1,0.2,0.1,0.2 c0.1,0.3,0.3,0.5,0.5,0.8c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.3,0.3,0.5,0.5,0.7c0.1,0.1,0.1,0.2,0.2,0.2c0.3,0.3,0.5,0.6,0.8,0.9l0,0 c0.3,0.3,0.6,0.5,0.9,0.8c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.2,0.5,0.4,0.7,0.5c0.1,0.1,0.2,0.1,0.3,0.2c0.3,0.2,0.7,0.4,1,0.6 c0.1,0,0.1,0.1,0.2,0.1c0.3,0.2,0.6,0.3,1,0.5c0.1,0,0.1,0.1,0.2,0.1l185,78.4l78.4,185c0.1,0.4,0.3,0.7,0.5,1 c0,0.1,0.1,0.2,0.1,0.2c0.2,0.3,0.3,0.5,0.5,0.8c0.1,0.1,0.1,0.2,0.2,0.3c0.2,0.3,0.4,0.5,0.5,0.7c0.1,0.1,0.1,0.2,0.2,0.2 c0.3,0.3,0.5,0.6,0.8,0.9l0.1,0.1c0.3,0.2,0.5,0.5,0.8,0.7c0.1,0.1,0.2,0.2,0.3,0.2c0.2,0.2,0.5,0.4,0.7,0.5 c0.1,0.1,0.2,0.1,0.3,0.2c0.3,0.2,0.7,0.4,1,0.6c0.1,0,0.2,0.1,0.2,0.1c0.3,0.2,0.6,0.3,0.9,0.4c0.1,0,0.1,0.1,0.2,0.1 c0,0,0.1,0,0.1,0.1c0.3,0.1,0.7,0.3,1,0.4h0.1c0.4,0.1,0.7,0.2,1.1,0.3c0.1,0,0.3,0,0.4,0.1c0.3,0,0.5,0.1,0.8,0.1 c0.1,0,0.3,0,0.4,0c0.4,0,0.7,0.1,1.1,0.1l0,0l0,0l0,0l0,0c0.4,0,0.8,0,1.1-0.1c0.1,0,0.3,0,0.4,0c0.3,0,0.6-0.1,0.8-0.1 c0.1,0,0.3,0,0.4-0.1c0.4-0.1,0.8-0.2,1.1-0.3c0.1,0,0.1,0,0.2-0.1c0.3-0.1,0.7-0.2,1-0.4c0.1,0,0.1,0,0.2-0.1 c0.1,0,0.1-0.1,0.2-0.1c0.3-0.1,0.6-0.3,0.9-0.5c0.1,0,0.1-0.1,0.2-0.1c0.3-0.2,0.7-0.4,1-0.6c0.1-0.1,0.2-0.1,0.3-0.2 c0.2-0.2,0.5-0.3,0.7-0.5c0.1-0.1,0.2-0.2,0.3-0.2c0.3-0.3,0.6-0.5,0.8-0.8l0,0c0.3-0.3,0.5-0.6,0.8-0.9c0.1-0.1,0.1-0.2,0.2-0.3 c0.2-0.2,0.4-0.5,0.5-0.7c0.1-0.1,0.1-0.2,0.2-0.3c0.2-0.3,0.3-0.5,0.5-0.8c0-0.1,0.1-0.2,0.1-0.2c0.2-0.3,0.3-0.7,0.5-1 l189.6-458.4c0.3-0.8,0.6-1.7,0.8-2.6c0.1-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0-0.4,0-0.7,0.1-1.1c0-0.1,0-0.2,0-0.2 C487.1,14.665,487.1,14.365,487.1,14.065z M48.6,203.365l370.6-153l-217.8,217.7L48.6,203.365z M284,438.765l-64-151.1l215.3-215.2 L284,438.765z"></path> </g> </g></svg>
                  My Vehicle
                </NavLink>
              </li>
              {/* <!-- Menu Item MyProfile --> */}

              {/* <!-- Menu Item MyProfile --> */}
              <li>
                <NavLink
                  to="/myprofile"
                  className={`group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium duration-300 ease-in-out hover:bg-orange-400 hover:text-white 
                    ${pathname.includes('myprofile') && 'bg-orange-400 text-white'}
                    ${!pathname.includes('myprofile') && 'text-black'}`}
                >
                  <svg
                    className="fill-current"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0002 7.79065C11.0814 7.79065 12.7689 6.1594 12.7689 4.1344C12.7689 2.1094 11.0814 0.478149 9.0002 0.478149C6.91895 0.478149 5.23145 2.1094 5.23145 4.1344C5.23145 6.1594 6.91895 7.79065 9.0002 7.79065ZM9.0002 1.7719C10.3783 1.7719 11.5033 2.84065 11.5033 4.16252C11.5033 5.4844 10.3783 6.55315 9.0002 6.55315C7.62207 6.55315 6.49707 5.4844 6.49707 4.16252C6.49707 2.84065 7.62207 1.7719 9.0002 1.7719Z"
                      fill=""
                    />
                    <path
                      d="M10.8283 9.05627H7.17207C4.16269 9.05627 1.71582 11.5313 1.71582 14.5406V16.875C1.71582 17.2125 1.99707 17.5219 2.3627 17.5219C2.72832 17.5219 3.00957 17.2407 3.00957 16.875V14.5406C3.00957 12.2344 4.89394 10.3219 7.22832 10.3219H10.8564C13.1627 10.3219 15.0752 12.2063 15.0752 14.5406V16.875C15.0752 17.2125 15.3564 17.5219 15.7221 17.5219C16.0877 17.5219 16.3689 17.2407 16.3689 16.875V14.5406C16.2846 11.5313 13.8377 9.05627 10.8283 9.05627Z"
                      fill=""
                    />
                  </svg>

                  My Profile
                </NavLink>
              </li>
              {/* <!-- Menu Item MyProfile --> */}
              <li>
                <NavLink
                  to="/auth/signin"
                  className='text-red-800 group relative flex items-center gap-2.5 rounded-lg py-2 px-4 font-medium duration-300 ease-in-out hover:bg-orange-400 hover:text-white'
                >
                  <svg className='fill-current' height="18" width="18" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384.971 384.971"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z"></path> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
