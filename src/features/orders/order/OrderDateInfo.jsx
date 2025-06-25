import { format } from 'date-fns';

function OrderDateInfo({ created_at, orderId }) {
   return (
      <div className="flex flex-col gap-4 bg-primary-200 dark:bg-primary-900 rounded-lg py-6 px-12 transition-custom">
         <h1 className="text-5xl font-semibold">Order #{orderId}</h1>

         <span className="text-xl dark:text-primary-200">
            {format(created_at, 'MMM d, yyyy')} at{' '}
            {format(created_at, 'HH:mm a')}
         </span>
      </div>
   );
}

export default OrderDateInfo;
