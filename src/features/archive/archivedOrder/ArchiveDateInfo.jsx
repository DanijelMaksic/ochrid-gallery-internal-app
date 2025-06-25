import { format } from 'date-fns';

function ArchiveDateInfo({ order_date, archived_at, order_id }) {
   return (
      <div className="flex flex-col gap-4 bg-primary-200 dark:bg-primary-900 rounded-lg py-6 px-12 transition-custom relative">
         <h1 className="text-5xl font-semibold py-1">Order #{order_id}</h1>

         <div className="flex flex-col gap-1">
            <span className="text-xl">
               <span className="font-semibold dark:text-primary-200">
                  Ordered at:
               </span>{' '}
               <span className="dark:text-primary-300">
                  {format(order_date, 'MMM d, yyyy')} at{' '}
                  {format(order_date, 'HH:mm a')}
               </span>
            </span>

            <span className="text-xl">
               <span className="font-semibold dark:text-primary-200">
                  Archived at:
               </span>{' '}
               <span className="dark:text-primary-300">
                  {format(archived_at, 'MMM d, yyyy')} at{' '}
                  {format(archived_at, 'HH:mm a')}
               </span>
            </span>
         </div>

         <div className="absolute top-2 right-2  font-semibold uppercase bg-primary-0 px-3 py-1 rounded-xl dark:bg-primary-600 transition-custom pointer-events-none">
            Archived
         </div>
      </div>
   );
}

export default ArchiveDateInfo;
