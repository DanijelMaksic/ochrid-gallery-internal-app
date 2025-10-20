import { motion } from 'motion/react';
import { useSignup } from './useSignup';
import { useForm } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { useQueryClient } from '@tanstack/react-query';

import FormRow from '../../ui/FormRow';

function SignUpForm({ onClose }) {
   const { register, handleSubmit, formState, getValues, reset } = useForm();
   const { signup, isCreating } = useSignup();

   const { errors } = formState;

   const queryClient = useQueryClient();

   function onSubmitForm({ full_name, email, password }) {
      signup(
         { full_name, email, password },
         {
            onSettled: () => {
               queryClient.invalidateQueries('users');
               onClose?.();
               reset();
            },
         }
      );
   }

   const inputStyle =
      'border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[22rem]';

   return (
      <motion.form
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         onSubmit={handleSubmit(onSubmitForm)}
         className={`bg-primary-0 dark:bg-primary-700 rounded-lg text-primary-900 dark:text-primary-100 overflow-hidden text-xl px-25 py-13 w-[57rem] h-min flex flex-col transition-custom border-2 border-primary-200 dark:border-primary-600 ${
            isCreating &&
            'pointer-events-none opacity-65 dark:opacity-60 transition-custom'
         }`}
      >
         <FormRow
            label="Full name"
            error={errors?.full_name?.message}
            type="signup"
         >
            <input
               type="text"
               disabled={isCreating}
               id="full_name"
               autoComplete="nope"
               {...register('full_name', {
                  required: 'This field is required',
               })}
               className={inputStyle}
            />
         </FormRow>

         <FormRow label="Email" error={errors?.email?.message} type="signup">
            <input
               type="email"
               disabled={isCreating}
               id="email"
               autoComplete="nope"
               {...register('email', {
                  required: 'This field is required',
                  validate: (value) =>
                     value.includes('@') ||
                     'Email address needs to contain @ symbol',
               })}
               className={inputStyle}
            />
         </FormRow>

         <FormRow
            label="Password"
            error={errors?.password?.message}
            type="signup"
         >
            <input
               type="password"
               disabled={isCreating}
               id="password"
               autoComplete="nope"
               {...register('password', {
                  required: 'This field is required',
                  minLength: {
                     value: 8,
                     message: 'Password should have minimum of 8 characters',
                  },
               })}
               className={inputStyle}
            />
         </FormRow>

         <FormRow
            label="Repeat password"
            error={errors?.password_confirm?.message}
            type="signup"
         >
            <input
               type="password"
               disabled={isCreating}
               autoComplete="nope"
               id="password_confirm"
               {...register('password_confirm', {
                  required: 'This field is required',
                  validate: (value) =>
                     value === getValues().password ||
                     'Passwords need to match',
               })}
               className={inputStyle}
            />
         </FormRow>

         <div className="self-end flex gap-6 mt-6">
            <button
               type="reset"
               onClick={reset}
               className="px-6 py-2 rounded-md border-2 border-secondary
              border-primary-0 dark:border-primary-700  hover:border-primary-400 dark:hover:border-primary-400 transition-text"
            >
               Clear
            </button>

            <button className="bg-primary-100 dark:bg-primary-900 pr-6 pl-5 py-2 rounded-md hover:bg-primary-800 hover:text-primary-100  dark:hover:bg-primary-300 dark:hover:text-primary-900 transition-text flex items-center gap-1">
               {isCreating ? (
                  <>
                     <CgSpinner className="animate-spin mr-1 size-6" />
                     <span>Signin up</span>
                  </>
               ) : (
                  <>
                     <HiOutlinePlusCircle /> <span>Sign up</span>
                  </>
               )}
            </button>
         </div>
      </motion.form>
   );
}

export default SignUpForm;
