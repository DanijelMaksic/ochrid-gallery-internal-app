import { Outlet } from 'react-router-dom';

import { motion } from 'motion/react';

import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[auto_1fr]"
      >
         <Header />
         <Sidebar />
         <main className="px-12 py-8 bg-primary-50 dark:bg-primary-950 transition-custom overflow-auto remove-scrollbar">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3, delay: 0.2 }}
               className="flex flex-col gap-6"
            >
               <Outlet />
            </motion.div>
         </main>
      </motion.div>
   );
}

export default Layout;
