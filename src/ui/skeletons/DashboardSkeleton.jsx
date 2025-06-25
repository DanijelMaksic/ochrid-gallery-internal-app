import { motion } from 'motion/react';

function DashboardSkeleton() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="grid grid-cols-4 grid-rows-[auto_20rem] gap-10 relative"
      >
         <span className="absolute inset-0 m-0 bg-gradient-to-t z-10 from-primary-50 dark:from-primary-950" />

         <StatSkeleton />
         <StatSkeleton />
         <StatSkeleton />
         <StatSkeleton />

         <TodayActivitySkeleton />

         <SalesChartSkeleton />
      </motion.div>
   );
}

export function StatSkeleton() {
   return (
      <div className="w-full h-[6.20rem] bg-primary-200 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom flex gap-4 px-4 py-4 items-center">
         <span className="rounded-full h-16 w-16 bg-primary-400"></span>

         <div className="flex flex-col gap-2">
            <h2 className="w-24 h-6 bg-primary-400 rounded-md"></h2>
            <span className="w-12 h-6 bg-primary-400 rounded-md"></span>
         </div>
      </div>
   );
}

function TodayActivitySkeleton() {
   return (
      <div className="w-full h-80 bg-primary-300 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom grid-activity"></div>
   );
}

function SalesChartSkeleton() {
   return (
      <div className="w-full col-span-2 h-80 bg-primary-300 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom"></div>
   );
}

export default DashboardSkeleton;
