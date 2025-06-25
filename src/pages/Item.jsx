import { Link, useParams } from 'react-router-dom';

import { motion } from 'motion/react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useItems } from '../features/items/useItems';

import ItemDetails from '../ui/ItemDetails';
import NoItemFound from '../ui/NoItemFound';
import ItemDetailSkeleton from '../ui/skeletons/ItemDetailSkeleton';

function Item() {
   const { id } = useParams();

   const { isLoading, items } = useItems();

   const item = items?.find((item) => item.id === Number(id));

   if (isLoading) return <ItemDetailSkeleton type="primary" />;

   if (!item) return <NoItemFound />;

   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex gap-6"
         >
            <Link to={-1}>
               <RiArrowGoBackFill className="size-9 bg-primary-200 p-2 rounded-lg dark:bg-primary-600 hover:bg-primary-300 transition-custom dark:hover:bg-primary-500" />
            </Link>
            <h1 className="text-4xl font-semibold transition-text">
               Icon details
            </h1>
         </motion.div>
         <ItemDetails item={item} />
      </>
   );
}

export default Item;
