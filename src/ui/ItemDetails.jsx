import { motion } from 'motion/react';
import { formatCurrency } from '../utils/helpers';
import { useReviews } from '../features/items/useReviews';
import { useWishlists } from '../features/items/useWishlists';

import ItemDetailSkeleton from './skeletons/ItemDetailSkeleton';

function ItemDetails({ item }) {
   const { image, name, price, quantity, in_stock, sales, id } = item;
   const { reviews, isLoading } = useReviews();
   const { wishlists, isLoading2 } = useWishlists();

   if (isLoading || isLoading2) return <ItemDetailSkeleton type="secondary" />;

   const itemWishlists = wishlists.filter(
      (wishlist) => wishlist.item_id === id
   );

   // Calculating REVIEWS
   const itemReviews = reviews.filter((review) => review.item_id === id);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="grid grid-cols-2 gap-16 max-w-300"
      >
         <div className="flex items-center justify-center bg-primary-200 dark:bg-primary-700 rounded-lg overflow-hidden transition-custom border-2 border-primary-300 dark:border-primary-500">
            <img
               src={image}
               alt={`${name} icon image`}
               className="h-120 object-contain dark:opacity-80 opacity-90"
            />
         </div>

         <div className="flex flex-col transition-text">
            <h2
               className={`mb-16 ${name.length > 40 ? 'text-3xl' : 'text-5xl'}`}
            >
               {name}
            </h2>
            <span className="text-5xl mb-4">{formatCurrency(price)}</span>

            <span
               className={
                  in_stock === true
                     ? 'bg-in_stock text-in_stock_text uppercase text-lg font-semibold w-max rounded-full px-4 py-1 transition-custom mb-20'
                     : 'bg-sold_out uppercase text-lg font-semibold w-max rounded-full px-4 py-1 text-sold_out_text transition-custom mb-20'
               }
            >
               {in_stock ? 'In stock' : 'Sold out'}
            </span>

            <div className="flex flex-col gap-1 transition-text">
               <div className="flex gap-3 items-center text-2xl ">
                  <span>Quantity:</span>
                  <span className="font-semibold">
                     {quantity < 1 ? '‒' : quantity}
                  </span>
               </div>

               <div className="flex gap-3 items-center text-2xl">
                  <span>Sales:</span>
                  <span className="font-semibold">
                     {sales < 1 ? '‒' : sales}
                  </span>
               </div>

               <div className="flex gap-3 items-center text-2xl">
                  <span>Wishlists:</span>
                  <span className="font-semibold">
                     {itemWishlists.length < 1 ? '‒' : itemWishlists.length}
                  </span>
               </div>

               <div className="flex gap-3 items-center text-2xl">
                  <span>Reviews:</span>
                  <span className="font-semibold">
                     {itemReviews.length < 1 ? '‒' : itemReviews.length}
                  </span>
               </div>
            </div>
         </div>
      </motion.div>
   );
}

export default ItemDetails;
