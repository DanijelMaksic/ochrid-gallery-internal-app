import { useSearchParams } from 'react-router-dom';

import { PAGE_SIZE } from '../../utils/config';
import { useArchivedOrders } from './useArchivedOrders';

import Table from '../../ui/Table';
import Pagination from '../../ui/Pagination';
import ArchivedOrderRow from './ArchivedOrderRow';

function ArchiveTable() {
   const { archivedOrders } = useArchivedOrders();
   const [searchParams] = useSearchParams();

   // 1) SORT
   const sortBy = searchParams.get('sort-by') || 'archived_at-asc';

   const [field, direction] = sortBy.split('-');

   const modifier = direction === 'asc' ? 1 : -1;
   const dateModifier = direction === 'asc' ? -1 : 1;

   function compare(a, b) {
      if (a['full_name'] < b['full_name']) {
         return -1 * modifier;
      }
      if (a['full_name'] > b['full_name']) {
         return 1 * modifier;
      }
      return 0;
   }

   let sortedOrders = archivedOrders;

   if (field === 'full_name') sortedOrders.sort(compare);

   if (field === 'archived_at')
      sortedOrders.sort(
         (a, b) => (new Date(a[field]) - new Date(b[field])) * dateModifier
      );

   sortedOrders.sort((a, b) => (a[field] - b[field]) * modifier);

   // 2) SEARCH QUERY
   const searchQuery = searchParams.get('search-query') || '';
   const searchedOrders = sortedOrders.filter((order) =>
      order.id.toString().includes(searchQuery)
   );

   // 3) PAGINATION
   const page = !searchParams.get('page')
      ? 1
      : Number(searchParams.get('page'));

   const from = (page - 1) * PAGE_SIZE;
   const to = from + PAGE_SIZE;

   const paginatedOrders = searchedOrders.length
      ? searchedOrders.slice(from, to)
      : sortedOrders.slice(from, to);

   return (
      <Table columns="grid-table--orders">
         <Table.Header>
            <span></span>
            <span>Order ID</span>
            <span>Archive Date</span>
            <span>Customer</span>
            <span>Total</span>
            <span></span>
         </Table.Header>

         {!searchedOrders.length && (
            <p className="py-6 text-3xl text-center dark:bg-primary-700 bg-primary-0 transition-custom rounded-b-[6px]">
               No orders found...
            </p>
         )}

         <Table.Body
            data={!searchedOrders.length ? searchedOrders : paginatedOrders}
            render={(order) => (
               <ArchivedOrderRow order={order} key={order.id} />
            )}
         />

         <Table.Footer>
            {!searchedOrders.length ? null : (
               <Pagination count={searchedOrders.length} />
            )}
         </Table.Footer>
      </Table>
   );
}

export default ArchiveTable;
