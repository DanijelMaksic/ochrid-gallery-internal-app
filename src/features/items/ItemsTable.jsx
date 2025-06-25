import { useSearchParams } from 'react-router-dom';

import { useItems } from './useItems';
import { PAGE_SIZE } from '../../utils/config';

import ItemRow from './ItemRow';
import Menus from '../../ui/Menus';
import Table from '../../ui/Table';
import Pagination from '../../ui/Pagination';

function ItemsTable() {
   const { items } = useItems();
   const [searchParams] = useSearchParams();

   // 1) FILTER
   const filterValue = searchParams.get('status') || 'all';

   let filteredItems;

   if (filterValue === 'all') filteredItems = items;

   if (filterValue === 'in-stock')
      filteredItems = items.filter((item) => item.in_stock === true);

   if (filterValue === 'sold-out')
      filteredItems = items.filter((item) => item.in_stock === false);

   // 2) SORT
   const sortBy = searchParams.get('sort-by') || 'created_at-asc';

   const [field, direction] = sortBy.split('-');

   const modifier = direction === 'asc' ? 1 : -1;
   const dateModifier = direction === 'asc' ? -1 : 1;

   function compare(a, b) {
      if (a['name'] < b['name']) {
         return -1 * modifier;
      }
      if (a['name'] > b['name']) {
         return 1 * modifier;
      }
      return 0;
   }

   let sortedItems;

   if (field === 'name') sortedItems = filteredItems.sort(compare);

   if (field === 'created_at')
      sortedItems = filteredItems.sort(
         (a, b) => (new Date(a[field]) - new Date(b[field])) * dateModifier
      );

   sortedItems = filteredItems.sort((a, b) => (a[field] - b[field]) * modifier);

   // 3) SEARCH QUERY
   const searchQuery = searchParams.get('search-query') || '';
   const searchedItems = sortedItems.filter(
      (item) =>
         item.name?.toLowerCase().includes(searchQuery) ||
         item.name?.includes(searchQuery)
   );

   // 4) PAGINATION
   const page = !searchParams.get('page')
      ? 1
      : Number(searchParams.get('page'));

   const from = (page - 1) * PAGE_SIZE;
   const to = from + PAGE_SIZE;

   const paginatedItems = searchedItems.length
      ? searchedItems.slice(from, to)
      : sortedItems.slice(from, to);

   return (
      <Menus>
         <Table columns="grid-table--items" data={searchedItems}>
            <Table.Header>
               <span></span>
               <span>Name</span>
               <span>Price</span>
               <span>Status</span>
               <span>Quantity</span>
               <span></span>
            </Table.Header>

            {!searchedItems.length && (
               <p className="py-[1.87rem] text-3xl text-center dark:bg-primary-700 bg-primary-0 transition-custom rounded-b-[6px]">
                  No matching results...
               </p>
            )}

            <Table.Body
               data={!searchedItems.length ? searchedItems : paginatedItems}
               render={(item) => <ItemRow item={item} key={item.id} />}
            />

            <Table.Footer>
               {!searchedItems.length ? null : (
                  <Pagination count={searchedItems.length} />
               )}
            </Table.Footer>
         </Table>
      </Menus>
   );
}

export default ItemsTable;
