import { useLogout } from './useLogout';
import { CgSpinner } from 'react-icons/cg';
import { HiOutlineArrowRightOnRectangle } from 'react-icons/hi2';

function Logout() {
   const { logout, isLoading } = useLogout();

   return (
      <button
         onClick={logout}
         className={`hover:bg-primary-100 dark:hover:bg-primary-900  p-2 rounded-lg transition-text ${
            isLoading ? 'pointer-events-none opacity-80' : ''
         }`}
         disabled={isLoading}
      >
         {isLoading ? (
            <CgSpinner className="animate-spin text-xl" />
         ) : (
            <HiOutlineArrowRightOnRectangle className="size-6 transition-custom" />
         )}
      </button>
   );
}

export default Logout;
