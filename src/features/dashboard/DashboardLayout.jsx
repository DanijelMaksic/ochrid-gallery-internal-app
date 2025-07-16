import { motion } from 'motion/react';
import { useRecentArchivedOrders } from './useRecentAchivedOrders';

import Stats from './Stats';
import SalesChart from './SalesChart';
import TodayActivity from './TodayActivity';
import MostPopularItem from './MostPopularItem';
import DashboardSkeleton from '../../ui/skeletons/DashboardSkeleton';

function DashboardLayout() {
   const { archivedOrders, isLoading1, numDays } = useRecentArchivedOrders();

   if (isLoading1) return <DashboardSkeleton />;

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="grid grid-cols-4 grid-rows-[auto_20rem_auto] gap-6 pb-24 max-w-370"
      >
         <Stats archivedOrders={archivedOrders} />
         <TodayActivity />
         <MostPopularItem />
         <SalesChart archivedOrders={archivedOrders} numDays={numDays} />
      </motion.div>
   );
}

export default DashboardLayout;
