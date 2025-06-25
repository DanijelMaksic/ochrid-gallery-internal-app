import { Link } from 'react-router-dom';

import { motion } from 'motion/react';
import { ImSpinner8 } from 'react-icons/im';
import { useItems } from '../items/useItems';
import { MdImageNotSupported } from 'react-icons/md';

function MostPopularItem() {
   const { items, isLoading } = useItems();

   if (isLoading)
      return (
         <div className="bg-primary-0 rounded-md border-primary-300 border-2 grid-popular dark:bg-primary-800 dark:border-primary-500 transition-custom px-12 py-6">
            <div className="flex items-center justify-center h-60">
               <ImSpinner8 className="text-7xl text-primary-700 rotate dark:text-primary-400" />
            </div>
         </div>
      );

   const itemSales = items?.map((item) => item.sales);

   const highestSaleNum = Math.max(...itemSales);

   const mostPopularItem = items.find((item) => highestSaleNum === item.sales);

   if (!mostPopularItem || mostPopularItem.sales < 1)
      return <NoItems></NoItems>;

   const { name, image, id, sales } = mostPopularItem;

   return (
      <div className="bg-primary-0 rounded-md border-primary-300 border-2 grid-popular dark:bg-primary-800 dark:border-primary-500 transition-custom px-12 py-6">
         <h2 className="text-2xl font-semibold mb-3">Most Popular Icon</h2>

         <div className="grid grid-cols-[2fr_2fr] gap-6">
            <div className="flex items-center justify-center bg-primary-50 dark:bg-primary-700 rounded-lg overflow-hidden transition-custom border border-primary-300 dark:border-primary-500">
               <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={image}
                  alt={`${name} icon image`}
                  className="h-50 object-contain dark:opacity-80 opacity-90"
               />
            </div>

            <div className="flex flex-col items-center">
               <Link to={`/items/${id}`}>
                  <h2
                     className={`text-center underlined-text ${
                        name.length > 50 ? 'text-xl mb-4' : 'text-2xl mb-8'
                     }`}
                  >
                     {name.length > 27 ? `${name.slice(0, 28)}...` : name}
                  </h2>
               </Link>

               <div className="text-lg text-center">
                  <span className={`${sales > 999 ? 'text-6xl' : 'text-7xl'}`}>
                     &mdash;{sales}&mdash;
                  </span>{' '}
               </div>
               <p className="text-lg text-center uppercase">total sales</p>
            </div>
         </div>
      </div>
   );
}

function NoItems() {
   return (
      <div className="bg-primary-0 rounded-md border-primary-300 border-2 grid-popular dark:bg-primary-800 dark:border-primary-500 transition-custom px-12 py-6">
         <h2 className="text-2xl font-semibold mb-3">Most Popular Icon</h2>

         <div className="flex flex-col justify-center items-center h-50 gap-1 pointer-events-none">
            <MdImageNotSupported className="text-8xl text-primary-500 text-center transition-text" />
            <h2 className="text-2xl font-semibold text-primary-600 dark:text-primary-400 transition-text mb-3">
               No Icon found...
            </h2>
         </div>
      </div>
   );
}

export default MostPopularItem;
