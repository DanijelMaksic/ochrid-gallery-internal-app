import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'motion/react';
import { useOrders } from '../features/orders/useOrders';
import { useDeleteOrder } from '../features/orders/useDeleteOrder';
import { HiOutlineArchiveBoxArrowDown, HiOutlineTrash } from 'react-icons/hi2';
import { useCreateArchivedOrder } from '../features/archive/useCreateArchivedOrder';

import Row from '../ui/Row';
import Modal from '../ui/Modal';
import Delete from '../features/items/Delete';
import NoOrderFound from './../ui/NoOrderFound';
import OrderSkeleton from '../ui/skeletons/OrderSkeleton';
import { useAddSale } from '../features/items/useAddSale';
import ArchiveOrder from '../features/orders/order/ArchiveOrder';
import OrderCalcCard from '../features/orders/order/OrderCalcCard';
import OrderCustomerCard from '../features/orders/order/OrderCustomerCard';
import { useDeleteOrderOnArchive } from '../features/orders/useDeleteOrderOnArchive';

function Order() {
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
   const [isOpenArchiveModal, setIsOpenArchiveModal] = useState(false);
   const { isArchiving, createArchivedOrder } = useCreateArchivedOrder();

   const { isDeleting, deleteOrder } = useDeleteOrder();
   const { deleteOrderOnArchive } = useDeleteOrderOnArchive();
   const { isLoading, orders } = useOrders();
   const { addSale } = useAddSale();

   const { id } = useParams();
   const order = orders?.find((order) => order.id === Number(id));

   if (!order && isLoading) return <OrderSkeleton />;
   if (!order) return <NoOrderFound type="order" />;

   const cart = JSON.parse(order.cart);

   function handleAddSale() {
      cart.map((cartItem) => addSale(cartItem));
   }

   return (
      <>
         <Row type="horizontal">
            <div className="flex gap-6 items-center">
               <Link to={-1}>
                  <RiArrowGoBackFill className="size-9 bg-primary-200 p-2 rounded-lg dark:bg-primary-600 hover:bg-primary-300 transition-custom dark:hover:bg-primary-500" />
               </Link>
               <h1 className="text-4xl font-semibold transition-text">
                  Order details
               </h1>
            </div>

            <div className="flex gap-4">
               <button
                  onClick={() => setIsOpenArchiveModal((show) => !show)}
                  className="bg-primary-0 p-2 rounded-md hover:bg-primary-50 border-2 border-primary-300 dark:bg-primary-800 dark:border-primary-500 dark:hover:bg-primary-900
                   transition-custom flex items-center gap-1 text-xl"
               >
                  <HiOutlineArchiveBoxArrowDown />
               </button>

               <button
                  onClick={() => setIsOpenDeleteModal((show) => !show)}
                  className="bg-primary-0 p-2 rounded-md hover:bg-primary-50 border-2 border-primary-300 dark:bg-primary-800 dark:border-primary-500 dark:hover:bg-primary-900
                   transition-custom flex items-center gap-1 text-xl"
               >
                  <HiOutlineTrash />
               </button>
            </div>

            <AnimatePresence>
               {isOpenArchiveModal && (
                  <Modal onClose={() => setIsOpenArchiveModal(false)}>
                     <ArchiveOrder
                        isArchiving={isArchiving}
                        onClose={() => setIsOpenArchiveModal(false)}
                        onArchive={() => {
                           createArchivedOrder(order);
                           handleAddSale();
                        }}
                        onDelete={() => {
                           deleteOrderOnArchive(order);
                        }}
                     />
                  </Modal>
               )}
            </AnimatePresence>

            <AnimatePresence>
               {isOpenDeleteModal && (
                  <Modal onClose={() => setIsOpenDeleteModal(false)}>
                     <Delete
                        type="order"
                        isDeleting={isDeleting}
                        onClose={() => setIsOpenDeleteModal(false)}
                        onArchive={() => createArchivedOrder(order)}
                        onDelete={() => deleteOrder(order)}
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
            <OrderCalcCard order={order} />
            <OrderCustomerCard order={order} />
         </motion.div>
      </>
   );
}

export default Order;
