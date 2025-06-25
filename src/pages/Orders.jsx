import { useOrders } from '../features/orders/useOrders';

import Row from '../ui/Row';
import Search from '../ui/Search';
import NoOrdersFound from './../ui/NoOrdersFound';
import OrdersSort from '../features/orders/OrdersSort';
import TableSkeleton from '../ui/skeletons/TableSkeleton';
import OrdersTable from './../features/orders/OrdersTable';

function Orders() {
   const { isLoading, orders } = useOrders();

   if (orders?.length < 1) return <NoOrdersFound type="orders" />;

   return (
      <>
         <Row type="horizontal">
            <h1 className="text-4xl font-semibold transition-text">
               All orders
            </h1>
            <div className="flex gap-6">
               <Search field={'Order ID'} isLoading={isLoading} />
               <OrdersSort isLoading={isLoading} />
            </div>
         </Row>

         {isLoading ? (
            <TableSkeleton type="ordersSkeleton" />
         ) : (
            <>
               {' '}
               <OrdersTable />
            </>
         )}
      </>
   );
}

export default Orders;
