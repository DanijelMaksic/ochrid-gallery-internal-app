import { Link } from 'react-router-dom';

import { motion } from 'motion/react';

function PageNotFound() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="bg-primary-50 dark:bg-primary-950 h-screen flex items-center justify-center text-primary-900 dark:text-primary-100"
      >
         <div className="flex flex-col items-center gap-8 bg-primary-200 dark:bg-primary-700 px-20 py-10 rounded-md mb-32 border-2 dark:border-primary-600 border-primary-300">
            <p className="text-5xl">Page not Found...</p>
            <Link to="/dashboard">
               <button className="text-xl underlined-text">
                  &larr; &nbsp;Go back
               </button>
            </Link>
         </div>
      </motion.div>
   );
}

export default PageNotFound;
