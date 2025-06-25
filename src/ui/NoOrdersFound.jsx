import { motion } from 'motion/react';

function NoOrdersFound({ type }) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="h-screen flex items-center justify-center "
      >
         <div className="flex flex-col items-center gap-8 bg-primary-0 dark:bg-primary-700 px-20 py-10 rounded-md mb-60 border-2 border-primary-300 dark:border-primary-600 transition-custom">
            <p className="text-5xl">
               {type === 'orders' && 'No Orders found...'}
               {type === 'archivedOrders' && 'No Archived orders found...'}
            </p>
            <span className="text-2xl">
               {type === 'orders' &&
                  'When new orders come in, they will be displayed here'}
               {type === 'archivedOrders' &&
                  'When orders are archived, they will be displayed here'}
            </span>
         </div>
      </motion.div>
   );
}

export default NoOrdersFound;
