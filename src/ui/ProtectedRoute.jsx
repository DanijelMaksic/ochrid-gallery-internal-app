import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { motion } from 'motion/react';
import { useUser } from '../features/authentication/useUser';

function ProtectedRoute({ children }) {
   const navigate = useNavigate();

   // 1) Load the authencticated user
   const { isLoading, isAuthenticated } = useUser();

   // 2) If there is NO auth user, refirect to the /login
   useEffect(() => {
      if (!isAuthenticated && !isLoading) navigate('/login');
   }, [isAuthenticated, isLoading, navigate]);

   // 3) Show Spinner while loading
   if (isLoading)
      return (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="h-screen bg-primary-0 dark:bg-primary-950 flex items-center justify-center"
         >
            <motion.span
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
               className="w-[90px] h-[90px] border-[5px] border-primary-800 dark:border-primary-200 border-b-transparent dark:border-b-transparent rounded-full inline-block animate-spin z-10 box-border mb-20"
            ></motion.span>
         </motion.div>
      );

   // 4) If there IS a user, render the app
   if (isAuthenticated) return children;
}

export default ProtectedRoute;
