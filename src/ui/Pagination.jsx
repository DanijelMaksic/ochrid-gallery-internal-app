import { useSearchParams } from 'react-router-dom';

import { PAGE_SIZE } from '../utils/config';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

function Pagination({ count }) {
   const [searchParams, setSearchParams] = useSearchParams();
   const currentPage = !searchParams.get('page')
      ? 1
      : Number(searchParams.get('page'));

   const pageCount = Math.ceil(count / PAGE_SIZE);

   function nextPage() {
      const next = currentPage === pageCount ? currentPage : currentPage + 1;

      searchParams.set('page', next);
      setSearchParams(searchParams);
   }

   function prevPage() {
      const prev = currentPage === 1 ? currentPage : currentPage - 1;

      searchParams.set('page', prev);
      setSearchParams(searchParams);
   }

   if (pageCount <= 1) return null;

   return (
      <div className="w-full flex items-center justify-between py-2 border-t-2 border-primary-300 bg-primary-100 dark:bg-primary-900 dark:border-primary-600 last:rounded-b-[6px] transition-custom">
         <p className="text-lg ml-4">
            Showing{' '}
            <span className="font-semibold">
               {' '}
               {(currentPage - 1) * PAGE_SIZE + 1}
            </span>{' '}
            to{' '}
            <span className="font-semibold">
               {' '}
               {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
            </span>{' '}
            of <span className="font-semibold">{count}</span> results
         </p>

         <div className="flex gap-5 mr-4">
            <PaginationButton
               type="prev"
               onClick={prevPage}
               disabled={currentPage === 1}
            >
               <HiChevronLeft />
               <span>Previous</span>
            </PaginationButton>

            <PaginationButton
               type="next"
               onClick={nextPage}
               disabled={currentPage === pageCount}
            >
               <span>Next</span>
               <HiChevronRight />
            </PaginationButton>
         </div>
      </div>
   );
}

function PaginationButton({ children, type, onClick, disabled }) {
   return (
      <button
         disabled={disabled}
         onClick={onClick}
         className={`flex gap-1 items-center justify-center text-lg font-semibold hover:bg-primary-800 hover:text-primary-100 dark:hover:bg-primary-200 dark:hover:text-primary-900 rounded-md transition-custom py-0.5 ${
            type === 'prev' ? 'pr-3 pl-2' : 'pl-3 pr-2'
         } ${disabled && 'pointer-events-none opacity-50 dark:opacity-40'}`}
      >
         {children}
      </button>
   );
}

export default Pagination;
