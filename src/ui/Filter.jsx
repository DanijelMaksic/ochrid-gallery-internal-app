import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';

function Filter({ filterField, options }) {
   const [searchParams, setSearchParams] = useSearchParams();

   function handleClick(value) {
      searchParams.set(filterField, value);
      setSearchParams(searchParams);
   }

   const filterValue = searchParams.get(filterField) || options[0].value;

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="flex gap-1 text-lg px-1 py-1 bg-primary-0 dark:bg-primary-700 border-2 border-primary-200 dark:border-primary-600 rounded-md transition-custom"
      >
         {options.map((option) => (
            <button
               key={option.value}
               onClick={() => handleClick(option.value)}
               className={`hover:bg-primary-100 dark:hover:bg-primary-900 px-3 font-semibold py-0.5 rounded-md text-primary-900 dark:text-primary-100 transition-custom  ${
                  filterValue === option.value &&
                  'bg-primary-100 pointer-events-none dark:bg-primary-900'
               }`}
            >
               {option.label}
            </button>
         ))}
      </motion.div>
   );
}

export default Filter;
