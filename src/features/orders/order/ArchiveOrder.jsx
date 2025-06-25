import { CgSpinner } from 'react-icons/cg';

function ArchiveOrder({ onClose, onDelete, onArchive, isArchiving }) {
   return (
      <div className="flex flex-col gap-8 px-12 pb-8 pt-10 rounded-lg bg-primary-0 dark:bg-primary-700">
         <div className="flex flex-col gap-1 w-120">
            <h2 className="text-2xl font-semibold">Archive Order</h2>
            <p className="text-xl">
               Are you sure you want to archive this order?
            </p>
         </div>

         <div className="flex self-end gap-6 text-xl">
            <button
               onClick={() => onClose?.()}
               className="px-6 py-2 rounded-md border-2 border-secondary border-primary-0 dark:border-primary-700  hover:border-primary-400 dark:hover:border-primary-400 transition-text"
            >
               Cancel
            </button>

            <button
               disabled={isArchiving}
               onClick={() => {
                  onArchive();
                  onDelete();
               }}
               className={`bg-primary-100 dark:bg-primary-900 pr-6 pl-5 py-2 rounded-md hover:bg-primary-800 hover:text-primary-100  dark:hover:bg-primary-300 dark:hover:text-primary-900 font-semibolddark:hover:text-primary-900 transition-text flex items-center gap-1 ${
                  isArchiving &&
                  'hover:bg-primary-100 dark:bg-primary-900 pointer-events-none'
               }`}
            >
               {isArchiving ? (
                  <>
                     <CgSpinner className="animate-spin mr-1 size-6" />
                     <span>Archiving</span>
                  </>
               ) : (
                  <>
                     <span>Archive</span>
                  </>
               )}
            </button>
         </div>
      </div>
   );
}

export default ArchiveOrder;
