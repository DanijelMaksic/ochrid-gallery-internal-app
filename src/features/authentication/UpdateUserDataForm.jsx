import { useState } from 'react';

import { useUsers } from './useUsers';
import { RxUpdate } from 'react-icons/rx';
import { CgSpinner } from 'react-icons/cg';
import { useUpdateUser } from './useUpdateUser';
import { useUser } from '../authentication/useUser';
import { useUpdateUsersTable } from './useUpdateUsersTable';

import FormRow from '../../ui/FormRow';

function UpdateUserDataForm() {
   const {
      user: {
         email,
         id,
         user_metadata: { full_name: currentFullName },
      },
   } = useUser();

   const { updateUser, isUpdating } = useUpdateUser();
   const { updateUsersTable } = useUpdateUsersTable();

   const [fullName, setFullName] = useState(currentFullName);
   const [profileImage, setProfileImage] = useState(null);

   // Find old profile_image
   const { user: currentUser } = useUser();
   const { users } = useUsers();
   const theUser = users?.filter((user) => user.email === currentUser.email);

   if (theUser === undefined)
      return (
         <span className="w-228 h-102 bg-primary-300 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom grid-activity"></span>
      );

   const oldImage = theUser[0]?.profile_image?.slice(81);

   function handleSubmit(e) {
      e.preventDefault();
      if (!fullName) return;

      updateUser(
         { fullName, profileImage },
         {
            onSuccess: () => {
               setProfileImage(null);
               e.target.reset();
            },
         }
      );

      updateUsersTable({ fullName, profileImage, id, oldImage });
   }

   function handleCancel() {
      setFullName(currentFullName);
      setProfileImage(null);
   }

   const inputStyle =
      'border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[22rem]';

   return (
      <form
         onSubmit={handleSubmit}
         className={`bg-primary-0 dark:bg-primary-700 rounded-lg text-primary-900 dark:text-primary-100 overflow-hidden text-xl px-25 py-13 w-[57rem] h-min flex flex-col transition-custom border-2 border-primary-200 dark:border-primary-600 ${
            isUpdating &&
            'pointer-events-none opacity-65 dark:opacity-60 transition-custom'
         }`}
      >
         <FormRow label="Email">
            <input
               type="email"
               id="email"
               value={email}
               disabled
               onChange={(e) => setFullName(e.target.value)}
               className={`${inputStyle} pointer-events-none opacity-50 dark:opacity-40`}
            />
         </FormRow>

         <FormRow label="Full name">
            <input
               type="text"
               id="full_name"
               autoComplete="nope"
               value={fullName}
               onChange={(e) => setFullName(e.target.value)}
               className={inputStyle}
            />
         </FormRow>

         <FormRow label="Profile image">
            <input
               accept="image/*"
               type="file"
               id="image"
               onChange={(e) => setProfileImage(e.target.files[0])}
               className="rounded-md px-1 py-1 bg-primary-100 dark:bg-primary-900 w-[22rem] transition-custom"
            />
         </FormRow>

         <div className="self-end flex gap-6 mt-6">
            <button
               type="reset"
               onClick={handleCancel}
               className="px-6 py-2 rounded-md border-2 border-secondary
              border-primary-0 dark:border-primary-700  hover:border-primary-400 dark:hover:border-primary-400 transition-text"
            >
               Cancel
            </button>

            <button
               className={`bg-primary-100 dark:bg-primary-900 px-5 py-2 rounded-md hover:bg-primary-800 hover:text-primary-100  dark:hover:bg-primary-300 dark:hover:text-primary-900 transition-text flex items-center gap-1 ${
                  fullName === '' &&
                  'opacity-60 pointer-events-none dark:opacity-40'
               }`}
            >
               {isUpdating ? (
                  <>
                     <CgSpinner className="animate-spin mr-1 size-6" />
                     <span>Updating</span>
                  </>
               ) : (
                  <>
                     <RxUpdate className="text-lg" />{' '}
                     <span>Update account</span>
                  </>
               )}
            </button>
         </div>
      </form>
   );
}

export default UpdateUserDataForm;
