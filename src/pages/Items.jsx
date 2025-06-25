import { useItems } from '../features/items/useItems';

import Row from '../ui/Row';
import Search from '../ui/Search';
import NoItemsFound from '../ui/NoItemsFound';
import ItemsTable from '../features/items/ItemsTable';
import TableSkeleton from '../ui/skeletons/TableSkeleton';
import ItemsTableOperations from '../features/items/ItemsTableOperations';

function Items() {
   const { isLoading, items } = useItems();

   if (items?.length < 1) return <NoItemsFound />;

   return (
      <>
         <Row type="horizontal">
            <Search field={'Icon Name'} isLoading={isLoading} />
            <ItemsTableOperations isLoading={isLoading} />
         </Row>

         {isLoading ? (
            <TableSkeleton type="itemsSkeleton" />
         ) : (
            <>
               <ItemsTable />
            </>
         )}
      </>
   );
}

export default Items;
