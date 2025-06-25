import { ImSpinner8 } from 'react-icons/im';
import { useItems } from '../../items/useItems';

import ArchiveDateInfo from './ArchiveDateInfo';
import ArchiveNoteAndCalc from './ArchiveNoteAndCalc';
import ArchiveItemInfoTable from './ArchiveItemInfoTable';

function ArchiveCalcCard({ archivedOrder }) {
   const {
      order_date,
      order_id,
      note,
      archived_at,
      cart: cartString,
   } = archivedOrder;

   const { isLoading } = useItems();

   const cart = JSON.parse(cartString);

   if (isLoading)
      return (
         <div className="flex flex-col gap-3 bg-primary-0 dark:bg-primary-700 p-3 rounded-lg transition-custom pb-10 h-116 border-2 border-primary-300 dark:border-primary-600">
            <div className="flex items-center justify-center h-100">
               <ImSpinner8 className="text-7xl text-primary-700 rotate dark:text-primary-400" />
            </div>
         </div>
      );

   return (
      <div className="flex flex-col gap-3 bg-primary-0 dark:bg-primary-700 p-3 rounded-lg border-2 border-primary-200 dark:border-primary-600 transition-custom pb-10">
         <ArchiveDateInfo
            order_date={order_date}
            archived_at={archived_at}
            order_id={order_id}
         />
         <ArchiveItemInfoTable cart={cart} />
         <ArchiveNoteAndCalc note={note} orderTotal={cart[0].orderTotal} />
      </div>
   );
}

export default ArchiveCalcCard;
