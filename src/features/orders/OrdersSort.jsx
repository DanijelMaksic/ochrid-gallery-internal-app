import { motion } from 'motion/react';

import SortBy from '../../ui/SortBy';

function OrdersSort({ isLoading }) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className={`flex items-center gap-6 ${
            isLoading && 'opacity-50 pointer-events-none'
         }`}
      >
         <div className="flex items-center">
            <span className="text-lg px-3 py-1.5 border-2 border-primary-300 dark:border-primary-500 bg-primary-50 dark:bg-primary-800 font-semibold rounded-md transition-custom border-r-0 rounded-r-none pointer-events-none">
               Sort By:
            </span>

            <SortBy
               options={[
                  { value: 'created_at-asc', label: 'Date (latest)' },
                  { value: 'created_at-desc', label: 'Date (oldest)' },
                  { value: 'full_name-asc', label: 'Name (A-Z)' },
                  { value: 'full_name-desc', label: 'Name (Z-A)' },
                  { value: 'total-asc', label: 'Total (Low- High)' },
                  { value: 'total-desc', label: 'Total (High - Low)' },
               ]}
            />
         </div>
      </motion.div>
   );
}

export default OrdersSort;
