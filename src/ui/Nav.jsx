import { NavLink } from 'react-router-dom';
import {
   HiOutlineArchiveBox,
   HiOutlineHome,
   HiOutlinePhoto,
   HiOutlineShoppingCart,
   HiOutlineUsers,
   HiPlus,
} from 'react-icons/hi2';

function Nav() {
   return (
      <nav className="flex flex-col gap-3 text-xl">
         <NavItem to="dashboard">
            <HiOutlineHome className="size-6" />
            <span>Home</span>
         </NavItem>

         <NavItem to="create-item">
            <HiPlus className="size-6" />
            <span>Add Icon</span>
         </NavItem>

         <NavItem to="items">
            <HiOutlinePhoto className="size-6" />
            <span>Icons</span>
         </NavItem>

         <NavItem to="orders">
            <HiOutlineShoppingCart className="size-6" />
            <span>Orders</span>
         </NavItem>

         <NavItem to="archive">
            <HiOutlineArchiveBox className="size-6" />
            <span>Archive</span>
         </NavItem>

         <NavItem to="users">
            <HiOutlineUsers className="size-6" />
            <span>Users</span>
         </NavItem>
      </nav>
   );
}

function NavItem({ to, children }) {
   return (
      <NavLink
         to={to}
         className={({ isActive }) =>
            isActive
               ? 'nav-link bg-primary-100 dark:bg-primary-900 transition-custom'
               : 'nav-link transition-custom'
         }
      >
         {children}
      </NavLink>
   );
}

export default Nav;
