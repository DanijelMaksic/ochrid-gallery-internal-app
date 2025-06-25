import { motion } from 'motion/react';
import { FaImage } from 'react-icons/fa';

function TableSkeleton({ type }) {
   if (type === 'itemsSkeleton')
      return (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-md relative overflow-hidden bg-primary-200 w-full dark:bg-primary-700"
         >
            {/* Table Header */}
            <span className="absolute inset-0 m-0 bg-gradient-to-t z-10 from-primary-50 dark:from-primary-950" />

            <div className="grid items-center grid-table--items gap-10 text-2xl py-[0.8rem] bg-primary-300 dark:bg-primary-600">
               <span></span>
               <span className="bg-primary-400 w-20 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>
               <span className="bg-primary-400 w-20 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>
               <span className="bg-primary-400 w-20 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>
               <span className="bg-primary-400 w-20 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>
               <span></span>
            </div>

            {/* Table Content */}
            <ItemRowSkeleton />
            <ItemRowSkeleton />
            <ItemRowSkeleton />
            <ItemRowSkeleton />
            <ItemRowSkeleton />
         </motion.div>
      );

   if (type === 'ordersSkeleton')
      return (
         <motion.div className="rounded-md relative overflow-hidden bg-primary-200 w-full dark:bg-primary-700">
            {/* Table Header */}
            <span className="absolute inset-0 m-0 bg-gradient-to-t z-10 from-primary-50 dark:from-primary-950" />
            <div className="grid items-center grid-table--orders gap-10 text-2xl py-[0.8rem] bg-primary-300 dark:bg-primary-600">
               <span></span>

               <span className="bg-primary-400 w-26 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>

               <span className="bg-primary-400 w-30 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>

               <span className="bg-primary-400 w-26 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>

               <span className="bg-primary-400 w-20 h-6 rounded-md dark:bg-primary-500 animate-skeleton"></span>

               <span></span>
            </div>

            {/* Table Content */}
            <OrderRowSkeleton />
            <OrderRowSkeleton />
            <OrderRowSkeleton />
            <OrderRowSkeleton />
            <OrderRowSkeleton />
         </motion.div>
      );
}

function ItemRowSkeleton() {
   return (
      <div className="grid grid-table--items items-center gap-10 bg-primary-0 dark:bg-primary-700 odd:bg-primary-50 dark:odd:bg-primary-800">
         <span className="h-20 w-28 animate-skeleton bg-primary-300 dark:bg-primary-400 flex justify-center items-center">
            <FaImage className="h-8 w-8 text-primary-500" />
         </span>

         <span className="w-44 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-20 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-26 h-8 animate-skeleton rounded-full bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-10 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-7 h-7"></span>
      </div>
   );
}

function OrderRowSkeleton() {
   return (
      <div className="grid grid-table--orders items-center gap-10 odd:bg-primary-0 py-[1.63rem] dark:odd:bg-primary-700 bg-primary-50 dark:bg-primary-800">
         <span></span>

         <span className="w-20 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-36 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-44 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span className="w-20 h-7 animate-skeleton rounded-md bg-primary-300 dark:bg-primary-400"></span>

         <span></span>
      </div>
   );
}

export default TableSkeleton;
