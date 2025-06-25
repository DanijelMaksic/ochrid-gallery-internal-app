import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

function NoOrderFound({ type }) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="h-screen flex items-center justify-center "
      >
         <div className="flex flex-col items-center gap-8 bg-primary-0 dark:bg-primary-700 px-20 py-10 rounded-md mb-60 border-2 border-primary-300 dark:border-primary-600 transition-custom">
            {type === 'order' && (
               <>
                  <p className="text-5xl">Order could not be found...</p>
                  <Link to="/orders">
                     <button className="text-2xl underlined-text">
                        &larr; &nbsp;Go back
                     </button>
                  </Link>
               </>
            )}

            {type === 'archivedOrder' && (
               <>
                  <p className="text-5xl text-center leading-14">
                     Archived order <br /> could not be found...
                  </p>
                  <Link to="/archive">
                     <button className="text-2xl underlined-text">
                        &larr; &nbsp;Go back
                     </button>
                  </Link>
               </>
            )}
         </div>
      </motion.div>
   );
}

export default NoOrderFound;
