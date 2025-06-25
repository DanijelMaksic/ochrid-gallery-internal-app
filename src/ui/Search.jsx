import { useSearchParams } from 'react-router-dom';

import { motion } from 'motion/react';
import { HiSearch } from 'react-icons/hi';

function Search({ field, isLoading }) {
   const [searchParams, setSearchParams] = useSearchParams();
   const searchQuery = searchParams.get('search-query') || '';

   function handleChange(e) {
      searchParams.set('search-query', e.target.value);
      setSearchParams(searchParams);
   }

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className={`relative ${isLoading && 'opacity-50'}`}
      >
         <input
            type="text"
            onChange={handleChange}
            value={searchQuery}
            disabled={isLoading}
            className="bg-primary-0 border-2 dark:bg-primary-700 border-primary-300 dark:border-primary-500 dark:text-primary-100 placeholder:transition-custom dark:placeholder:text-primary-400 rounded-md px-4 py-1.5 w-92 text-primary-800 transition-custom placeholder:text-primary-500 text-lg focus-style"
            placeholder={`Search by ${field}...`}
         />
         <HiSearch className="absolute top-0 right-0 translate-x-[-40%] translate-y-[40%] text-2xl text-primary-700 dark:text-primary-300" />
      </motion.div>
   );
}

export default Search;
