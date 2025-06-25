import { Link } from 'react-router-dom';

import { formatCurrency } from '../../utils/helpers';
import { MdOutlineReadMore } from 'react-icons/md';

import Table from '../../ui/Table';

function ArchivedOrderRow({ order }) {
   const { id: orderId, full_name, archived_at, cart: cartString } = order;

   const cart = JSON.parse(cartString);
   const dateStr = new Date(archived_at).toString().slice(4, 15);
   const dateFirstPart = dateStr.substring(0, 6);
   const dateSecondPart = dateStr.substring(7, 11);

   return (
      <>
         <Table.Row>
            <span></span>

            <span>#{orderId}</span>

            <span className="my-[1.6rem]">
               {dateFirstPart}, {dateSecondPart}
            </span>

            <span>{full_name}</span>

            <span>{formatCurrency(cart[0].orderTotal)}</span>

            <Link to={`${orderId}`} className="w-min">
               <button className="p-2 hover:bg-primary-200 dark:hover:bg-primary-950 rounded-md cursor-pointer transition-text">
                  <MdOutlineReadMore />
               </button>
            </Link>
         </Table.Row>
      </>
   );
}

export default ArchivedOrderRow;
