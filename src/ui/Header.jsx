import { Link } from 'react-router-dom';

import { useDarkMode } from '../context/DarkModeContext';
import { useUser } from '../features/authentication/useUser';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

import Logout from '../features/authentication/Logout';

function Header() {
   const { isDarkMode, toggleDarkMode } = useDarkMode();
   const { user } = useUser();

   const { full_name, profile_image } = user.user_metadata;

   return (
      <header className="bg-primary-0 dark:bg-primary-700 border-primary-200 dark:border-primary-600 flex flex-row items-center gap-2 border-b-2 justify-end py-3 px-12 transition-custom">
         <Link
            to="/account"
            className="flex gap-3 items-center hover:bg-primary-100 dark:hover:bg-primary-900 rounded-md px-2 py-1 transition-custom text-lg"
         >
            <img
               src={profile_image || '../../public/default-user.jpg'}
               className="h-8 aspect-square object-cover object-center rounded-full dark:opacity-90 border border-primary-300 dark:border-primary-400 transition-custom"
               alt={`Profile image of ${full_name}`}
            />
            <span className="transition-custom">{full_name}</span>
         </Link>

         <span className="text-lg text-primary-700 dark:text-primary-300  pointer-events-none">
            |
         </span>

         <div className="flex gap-1">
            <button
               className="hover:bg-primary-100 dark:hover:bg-primary-900 p-2 rounded-lg transition-custom"
               onClick={toggleDarkMode}
            >
               {isDarkMode ? (
                  <HiOutlineMoon className="size-6 transition-custom" />
               ) : (
                  <HiOutlineSun className="size-6 transition-custom" />
               )}
            </button>

            <Logout />
         </div>
      </header>
   );
}

export default Header;
