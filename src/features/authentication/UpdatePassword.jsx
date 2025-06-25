import { useForm } from 'react-hook-form';

import { RxUpdate } from 'react-icons/rx';
import { CgSpinner } from 'react-icons/cg';
import { useUpdateUser } from './useUpdateUser';

import FormRow from '../../ui/FormRow';

function UpdatePassword() {
   const { register, handleSubmit, formState, getValues, reset } = useForm();
   const { errors } = formState;
   const { updateUser, isUpdating } = useUpdateUser();

   function onSubmit({ password }) {
      updateUser(
         { password },
         {
            onSuccess: reset,
         }
      );
   }

   return (
      <form
         onSubmit={handleSubmit(onSubmit)}
         className={`bg-primary-0 dark:bg-primary-700 rounded-lg text-primary-900 dark:text-primary-100 overflow-hidden text-xl px-25 py-13 w-[57rem] h-min flex flex-col transition-custom border-2 mb-24 border-primary-200 dark:border-primary-600 ${
            isUpdating &&
            'pointer-events-none opacity-65 dark:opacity-60 transition-custom'
         }`}
      >
         <FormRow
            type="signup"
            label="New Password"
            error={errors?.password?.message}
         >
            <input
               type="password"
               id="password"
               autoComplete="current-password"
               {...register('password', {
                  required: 'This field is required',
                  minLength: {
                     value: 8,
                     message: 'Password should have at least 8 characters',
                  },
               })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[22rem] no-spinners"
            />
         </FormRow>

         <FormRow
            type="signup"
            label="Confirm Password"
            error={errors?.password_confirm?.message}
         >
            <input
               type="password"
               autoComplete="new-password"
               id="password_confirm"
               {...register('password_confirm', {
                  required: 'This field is required',
                  validate: (value) =>
                     getValues().password === value ||
                     'Passwords need to match',
               })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[22rem] no-spinners"
            />
         </FormRow>

         <div className="self-end flex gap-6 mt-6">
            <button
               type="reset"
               onClick={reset}
               className="px-6 py-2 rounded-md border-2 border-secondary
              border-primary-0 dark:border-primary-700  hover:border-primary-400 dark:hover:border-primary-400 transition-text"
            >
               Cancel
            </button>

            <button className="bg-primary-100 dark:bg-primary-900 px-5 py-2 rounded-md hover:bg-primary-800 hover:text-primary-100  dark:hover:bg-primary-300 dark:hover:text-primary-900 transition-text flex items-center gap-1">
               {isUpdating ? (
                  <>
                     <CgSpinner className="animate-spin mr-1 size-6" />
                     <span>Updating</span>
                  </>
               ) : (
                  <>
                     <RxUpdate className="text-lg" />{' '}
                     <span>Update password</span>
                  </>
               )}
            </button>
         </div>
      </form>
   );
}

export default UpdatePassword;
