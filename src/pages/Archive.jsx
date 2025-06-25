import { useArchivedOrders } from '../features/archive/useArchivedOrders';

import Row from '../ui/Row';
import Search from '../ui/Search';
import NoOrdersFound from '../ui/NoOrdersFound';
import ArchiveSort from '../features/archive/ArchiveSort';
import TableSkeleton from '../ui/skeletons/TableSkeleton';
import ArchiveTable from '../features/archive/ArchiveTable';

function Archive() {
   const { isLoading, archivedOrders } = useArchivedOrders();

   if (archivedOrders?.length < 1)
      return <NoOrdersFound type="archivedOrders" />;

   return (
      <>
         <Row type="horizontal">
            <h1 className="text-4xl font-semibold transition-text">Archive</h1>
            <div className="flex gap-6">
               <Search field={'Order ID'} isLoading={isLoading} />
               <ArchiveSort isLoading={isLoading} />
            </div>
         </Row>

         {isLoading ? (
            <TableSkeleton type="ordersSkeleton" />
         ) : (
            <ArchiveTable />
         )}
      </>
   );
}

export default Archive;
