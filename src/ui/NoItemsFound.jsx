import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

function NoItemsFound() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="h-screen flex items-center justify-center "
      >
         <div className="flex flex-col items-center gap-8 bg-primary-0 dark:bg-primary-700 px-20 py-10 rounded-md mb-60 border-2 border-primary-300 dark:border-primary-600">
            <p className="text-5xl">No Icons found...</p>
            <span className="text-2xl">
               <Link to="/create-item">
                  <button className="underlined-text--alt">Add new Icon</button>
               </Link>{' '}
               to see the table
            </span>
         </div>
      </motion.div>
   );
}

export default NoItemsFound;
