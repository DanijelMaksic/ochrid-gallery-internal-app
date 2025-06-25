import { motion } from 'motion/react';

import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

function ItemsTableOperations({ isLoading }) {
   return (
      <div
         className={`flex items-center gap-6 ${
            isLoading && 'opacity-50 pointer-events-none'
         }`}
      >
         <Filter
            filterField={'status'}
            options={[
               { value: 'all', label: 'All' },
               { value: 'in-stock', label: 'In Stock' },
               { value: 'sold-out', label: 'Sold Out' },
            ]}
         />

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
         >
            <span className="text-lg px-3 py-2.5 border-2 border-primary-300 dark:border-primary-500 bg-primary-50 dark:bg-primary-800 font-semibold rounded-md transition-custom border-r-0 rounded-r-none pointer-events-none">
               Sort By:
            </span>

            <SortBy
               options={[
                  { value: 'created_at-asc', label: 'Date (latest)' },
                  { value: 'created_at-desc', label: 'Date (oldest)' },
                  { value: 'name-asc', label: 'Name (A-Z)' },
                  { value: 'name-desc', label: 'Name (Z-A)' },
                  { value: 'price-asc', label: 'Price (Low- High)' },
                  { value: 'price-desc', label: 'Price (High - Low)' },
                  {
                     value: 'quantity-asc',
                     label: 'Quantity (Low - High)',
                  },
                  {
                     value: 'quantity-desc',
                     label: 'Quantity (High - Low)',
                  },
               ]}
            />
         </motion.div>
      </div>
   );
}

export default ItemsTableOperations;
