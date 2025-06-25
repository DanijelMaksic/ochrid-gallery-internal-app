import { Link } from 'react-router-dom';

import { useUser } from './useUser';
import { motion } from 'motion/react';
import { useUsers } from './useUsers';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';

import UsersSkeleton from '../../ui/skeletons/UsersSkeleton';

function UsersList() {
   const { users, isLoading } = useUsers();

   if (isLoading) return <UsersSkeleton />;

   return (
      <ul className="grid grid-cols-2 gap-12">
         {users?.map((user) => (
            <UserRow user={user} key={user.id} />
         ))}
      </ul>
   );
}

function UserRow({ user }) {
   const { user: currentUser } = useUser();

   const { full_name, email, profile_image } = user;

   return (
      <motion.li
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className="flex gap-6 items-center bg-primary-0 px-10 py-5 rounded-md w-auto relative border-2 border-primary-300 dark:bg-primary-800 dark:border-primary-600 transition-custom"
      >
         <img
            src={profile_image || '../../public/default-user.jpg'}
            className="h-20 aspect-square object-cover object-center rounded-full dark:opacity-90 border-2 border-primary-400 transition-custom"
            alt={`Profile image of ${full_name}`}
         />

         <div className="flex flex-col gap-1">
            <span className="font-semibold text-2xl">{full_name}</span>
            <span className="text-primary-800 dark:text-primary-300 text-xl">
               {email}
            </span>
         </div>

         {currentUser.email === user.email ? (
            <Link to="/account">
               <button className="absolute top-5 right-5 z-10 hover:bg-primary-100 dark:hover:bg-primary-950 p-2 rounded-lg transition-custom">
                  <HiOutlineCog6Tooth className="size-6" />
               </button>
            </Link>
         ) : null}

         {currentUser.email === user.email ? (
            <span className="absolute top-[-1rem] left-[-1rem] z-10 transition-custom bg-primary-800 text-primary-200 font-semibold px-3 py-0.5 uppercase rounded-full tracking-wide dark:bg-primary-200 dark:text-primary-900 pointer-events-none">
               Active User
            </span>
         ) : null}
      </motion.li>
   );
}

export default UsersList;
