import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { CgRemove } from 'react-icons/cg';
import { BiDetail } from 'react-icons/bi';
import { AnimatePresence } from 'motion/react';
import { useDeleteItem } from './useDeleteItem';
import { HiOutlinePencil } from 'react-icons/hi';
import { formatCurrency } from '../../utils/helpers';

import Delete from './Delete';
import Table from '../../ui/Table';
import Modal from '../../ui/Modal';
import Menus from '../../ui/Menus';
import EditItemForm from './EditItemForm';

function ItemRow({ item }) {
   const [isOpenEditModal, setIsOpenEditModal] = useState(false);
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
   const { isDeleting, deleteItem } = useDeleteItem();

   const { image, name, price, in_stock, quantity, id: item_id } = item;

   const navigate = useNavigate();

   return (
      <>
         <Table.Row>
            <div className="flex items-center justify-center bg-primary-100 dark:bg-primary-600 overflow-hidden transition-custom">
               <img
                  src={image}
                  alt={`${name} icon image`}
                  className="h-20 object-contain dark:opacity-80 opacity-90"
               />
            </div>

            <span>
               <Link to={`${item_id}`}>
                  <button
                     className={`underlined-text text-left ${
                        name.length > 28 ? 'text-xl' : 'text-2xl'
                     }`}
                  >
                     {name.length > 48 ? `${name.slice(0, 49)}...` : name}
                  </button>
               </Link>
            </span>

            <span>{formatCurrency(price)}</span>

            <span
               className={
                  in_stock === true
                     ? 'bg-in_stock text-in_stock_text uppercase text-base font-semibold w-max rounded-full px-4 py-1 transition-custom'
                     : 'bg-sold_out uppercase text-base font-semibold w-max rounded-full px-4 py-1 text-sold_out_text transition-custom'
               }
            >
               {in_stock ? 'In stock' : 'Sold out'}
            </span>

            <span>{quantity === 0 ? <span>&mdash;</span> : quantity}</span>

            <Menus.Menu>
               <Menus.Toggle id={item_id} />

               <Menus.List id={item_id}>
                  <Menus.Button
                     onClick={() => navigate(`${item_id}`)}
                     icon={<BiDetail className="size-4" />}
                  >
                     Details
                  </Menus.Button>

                  <Menus.Button
                     onClick={() => setIsOpenEditModal((show) => !show)}
                     icon={<HiOutlinePencil className="size-4" />}
                  >
                     Edit
                  </Menus.Button>

                  <Menus.Button
                     onClick={() => setIsOpenDeleteModal((show) => !show)}
                     icon={<CgRemove className="size-4" />}
                  >
                     Delete
                  </Menus.Button>
               </Menus.List>
            </Menus.Menu>
         </Table.Row>

         <AnimatePresence>
            {isOpenEditModal && (
               <Modal onClose={() => setIsOpenEditModal(false)}>
                  <EditItemForm
                     itemToEdit={item}
                     onClose={() => setIsOpenEditModal(false)}
                  />
               </Modal>
            )}
         </AnimatePresence>

         <AnimatePresence>
            {isOpenDeleteModal && (
               <Modal onClose={() => setIsOpenDeleteModal(false)}>
                  <Delete
                     type="item"
                     isDeleting={isDeleting}
                     onClose={() => setIsOpenDeleteModal(false)}
                     onDelete={() => deleteItem(item)}
                  />
               </Modal>
            )}
         </AnimatePresence>
      </>
   );
}

export default ItemRow;
