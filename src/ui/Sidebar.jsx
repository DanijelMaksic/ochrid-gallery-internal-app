import Nav from './Nav';
import Logo from './Logo';

function Sidebar() {
   return (
      <aside className="bg-primary-0 dark:bg-primary-700 border-primary-200 dark:border-primary-600 border-r-2 row-span-full flex flex-col px-6 transition-custom">
         <Logo />
         <Nav />
      </aside>
   );
}

export default Sidebar;
