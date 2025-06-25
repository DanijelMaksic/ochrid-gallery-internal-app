import { useState } from 'react';

import { RiUserAddLine } from 'react-icons/ri';
import { AnimatePresence } from 'motion/react';

import Row from '../ui/Row';
import Modal from '../ui/Modal';
import UsersList from '../features/authentication/UsersList';
import SignUpForm from '../features/authentication/SignUpForm';

function Users() {
   const [isOpenModal, setIsOpenModal] = useState(false);

   return (
      <>
         <Row type="horizontal">
            <h1 className="text-4xl font-semibold transition-text">
               All users
            </h1>
            <button
               onClick={() => setIsOpenModal((show) => !show)}
               className="bg-primary-0 p-2 rounded-md hover:bg-primary-50 border-2 border-primary-300 dark:bg-primary-800 dark:border-primary-500 dark:hover:bg-primary-900
                               transition-custom flex items-center gap-1 text-xl"
            >
               <RiUserAddLine />
            </button>

            <AnimatePresence>
               {isOpenModal && (
                  <Modal onClose={() => setIsOpenModal(false)}>
                     <SignUpForm onClose={() => setIsOpenModal(false)} />
                  </Modal>
               )}
            </AnimatePresence>
         </Row>

         <UsersList />
      </>
   );
}

export default Users;
