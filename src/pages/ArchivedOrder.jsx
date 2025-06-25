import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { HiOutlineTrash } from 'react-icons/hi2';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'motion/react';
import { useArchivedOrders } from '../features/archive/useArchivedOrders';
import { useDeleteArchivedOrder } from '../features/archive/useDeleteArchivedOrder';

import Row from '../ui/Row';
import Modal from '../ui/Modal';
import Delete from '../features/items/Delete';
import NoOrderFound from './../ui/NoOrderFound';
import OrderSkeleton from '../ui/skeletons/OrderSkeleton';
import ArchiveCalcCard from '../features/archive/archivedOrder/ArchiveCalcCard';
import ArchiveCustomerCard from '../features/archive/archivedOrder/ArchiveCustomerCard';

function ArchivedOrder() {
   const { id } = useParams();
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
   const { isDeleting, deleteArchivedOrder } = useDeleteArchivedOrder();

   const { isLoading, archivedOrders } = useArchivedOrders();

   const archivedOrder = archivedOrders?.find(
      (order) => order.id === Number(id)
   );

   if (isLoading) return <OrderSkeleton />;

   if (!archivedOrder) return <NoOrderFound type="archivedOrder" />;

   return (
      <>
         <Row type="horizontal">
            <div className="flex gap-6 items-center">
               <Link to={-1}>
                  <RiArrowGoBackFill className="size-9 bg-primary-200 p-2 rounded-lg dark:bg-primary-600 hover:bg-primary-300 transition-custom dark:hover:bg-primary-500" />
               </Link>
               <h1 className="text-4xl font-semibold transition-text">
                  Archived order details
               </h1>
            </div>

            <button
               onClick={() => setIsOpenDeleteModal((show) => !show)}
               className="bg-primary-0 p-2 rounded-md hover:bg-primary-50 border-2 border-primary-300 dark:bg-primary-800 dark:border-primary-500 dark:hover:bg-primary-900
                   transition-custom flex items-center gap-1 text-xl"
            >
               <HiOutlineTrash />
            </button>

            <AnimatePresence>
               {isOpenDeleteModal && (
                  <Modal onClose={() => setIsOpenDeleteModal(false)}>
                     <Delete
                        type="archived order"
                        isDeleting={isDeleting}
                        onClose={() => setIsOpenDeleteModal(false)}
                        onDelete={() => deleteArchivedOrder(archivedOrder)}
                     />
                  </Modal>
               )}
            </AnimatePresence>
         </Row>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-[2fr_1.1fr] gap-6"
         >
            <ArchiveCalcCard archivedOrder={archivedOrder} />
            <ArchiveCustomerCard archivedOrder={archivedOrder} />
         </motion.div>
      </>
   );
}

export default ArchivedOrder;
