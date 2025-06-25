import { motion } from 'motion/react';
import { FaImage } from 'react-icons/fa';

function ItemDetailSkeleton({ type }) {
   return (
      <>
         {type === 'primary' && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.3 }}
               className="flex gap-6"
            >
               <span className="w-9 h-9 bg-primary-200 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom"></span>
               <h1 className="w-45 h-9 bg-primary-200 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom"></h1>
            </motion.div>
         )}

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-16"
         >
            <div className="flex items-center justify-center bg-primary-200 dark:bg-primary-600 rounded-lg overflow-hidden h-120 animate-skeleton transition-custom">
               <FaImage className="h-30 w-30 text-primary-500 transition-text" />
            </div>

            <div className="flex flex-col">
               <h2 className="h-11 w-90 rounded-lg bg-primary-200 dark:bg-primary-600 mb-18 transition-custom animate-skeleton"></h2>
               <span className="mb-4 w-40 h-11 bg-primary-200 dark:bg-primary-600 rounded-lg transition-custom animate-skeleton"></span>

               <span className="w-30 h-9 bg-primary-200 dark:bg-primary-600 rounded-full transition-custom animate-skeleton mb-20"></span>

               <div className="flex flex-col gap-3">
                  <span className="w-32 h-6 bg-primary-200 dark:bg-primary-600 rounded-lg transition-custom animate-skeleton"></span>

                  <span className="w-32 h-6 bg-primary-200 dark:bg-primary-600 rounded-lg transition-custom animate-skeleton"></span>

                  <span className="w-32 h-7 bg-primary-200 dark:bg-primary-600 rounded-lg transition-custom animate-skeleton"></span>

                  <span className="w-32 h-7 bg-primary-200 dark:bg-primary-600 rounded-lg transition-custom animate-skeleton"></span>
               </div>
            </div>
         </motion.div>
      </>
   );
}

export default ItemDetailSkeleton;
