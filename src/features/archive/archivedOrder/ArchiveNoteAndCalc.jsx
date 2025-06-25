import { formatCurrency } from '../../../utils/helpers';

function ArchiveNoteAndCalc({ note, orderTotal }) {
   return (
      <div className="grid grid-cols-2">
         <div className="pl-12 pr-2 flex flex-col gap-1">
            <h3 className="text-lg font-semibold">Note</h3>
            <p className="text-primary-800 dark:text-primary-300">
               {!note ? 'No note left...' : note}
            </p>
         </div>

         <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 gap-10 text-lg pl-6 border-b-2 border-primary-200 dark:border-primary-500 pb-2 transition-custom">
               <div className="flex flex-col gap-1">
                  <span className="self-end">Subtotal</span>
                  <span className="self-end">Shipping</span>
               </div>
               <div className="flex flex-col gap-1 font-medium">
                  <span>{formatCurrency(orderTotal - 20)}</span>
                  <span>{formatCurrency(20)}</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-10 text-lg mt-2 pl-6">
               <span className="self-end">Order Total</span>
               <span className="font-semibold">
                  {formatCurrency(orderTotal)}
               </span>
            </div>
         </div>
      </div>
   );
}

export default ArchiveNoteAndCalc;
