import { Link } from 'react-router-dom';

import { BsStack } from 'react-icons/bs';
import { ImSpinner8 } from 'react-icons/im';
import { MdOutlineReadMore } from 'react-icons/md';
import { formatCurrency } from '../../utils/helpers';
import { useTodayActivity } from './useTodayActivity';

function TodayActivity() {
   const { orders, isLoading } = useTodayActivity();

   if (isLoading)
      return (
         <div className="bg-primary-0 rounded-md border-primary-300 border-2 grid-activity dark:bg-primary-800 dark:border-primary-500 transition-custom px-12 py-6">
            <div className="flex items-center justify-center h-60">
               <ImSpinner8 className="text-7xl text-primary-700 rotate dark:text-primary-400" />
            </div>
         </div>
      );

   return (
      <div className="bg-primary-0 rounded-md border-primary-300 border-2 grid-activity dark:bg-primary-800 dark:border-primary-500 transition-custom px-12 py-6 overflow-scroll remove-scrollbar">
         <h2 className="text-2xl font-semibold mb-3">Today</h2>

         <div>
            {orders.length > 0 ? (
               orders.map((order) => (
                  <OrderPreview order={order} key={order.id} />
               ))
            ) : (
               <NoActivity />
            )}
         </div>
      </div>
   );
}

function OrderPreview({ order }) {
   const { full_name, id, cart: cartString } = order;
   const cart = JSON.parse(cartString);

   return (
      <div className="grid grid-cols-[0.6fr_1.8fr_1fr_0.2fr] px-3 gap-4 items-center first:border-t border-b py-1.5 border-primary-400 transition-custom dark:border-primary-500 text-lg">
         <span className="dark:text-primary-200">#{id}</span>
         <span className="font-semibold dark:text-primary-200 text-primary-900">
            {full_name}
         </span>
         <span className="text-primary-800 dark:text-primary-300">
            {formatCurrency(cart[0].orderTotal)}
         </span>
         <Link to={`/orders/${id}`}>
            <button className="p-1.5 hover:bg-primary-200 dark:hover:bg-primary-950 rounded-md cursor-pointer transition-text">
               <MdOutlineReadMore className="dark:text-primary-200" />
            </button>
         </Link>
      </div>
   );
}

function NoActivity() {
   return (
      <div className="flex flex-col justify-center items-center h-44 pointer-events-none gap-1">
         <BsStack className="text-8xl text-primary-500 text-center transition-text" />
         <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 transition-text">
            No new orders today...
         </h2>
      </div>
   );
}

export default TodayActivity;
