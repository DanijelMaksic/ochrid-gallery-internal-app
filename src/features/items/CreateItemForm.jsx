import { useForm } from 'react-hook-form';

import { motion } from 'motion/react';
import { CgSpinner } from 'react-icons/cg';
import { useCreateItem } from './useCreateItem';
import { HiOutlinePlusCircle } from 'react-icons/hi2';

import FormRow from '../../ui/FormRow';

function CreateItemForm() {
   const { register, handleSubmit, reset, formState } = useForm();
   const { isCreating, createItem } = useCreateItem();

   const { errors } = formState;

   function onSubmitForm(data) {
      createItem(
         { ...data, image: data.image[0] },
         {
            onSuccess: () => reset(),
         }
      );
   }

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
         <FormRow label="Name" type="newItem" error={errors?.name?.message}>
            <input
               type="text"
               id="name"
               autoComplete="nope"
               {...register('name', { required: 'This field is required' })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[23rem]"
            />
         </FormRow>

         <FormRow label="Price" type="newItem" error={errors?.price?.message}>
            <input
               type="number"
               id="price"
               autoComplete="nope"
               {...register('price', {
                  required: 'This field is required',
                  min: {
                     value: 1,
                     message: 'Price should be at least 1',
                  },
               })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[7rem] no-spinners"
            />
         </FormRow>

         <FormRow
            label="Quantity"
            type="newItem"
            error={errors?.quantity?.message}
         >
            <input
               type="number"
               id="quantity"
               autoComplete="nope"
               {...register('quantity', {
                  required: 'This field is required',
                  min: {
                     value: 1,
                     message: 'Quantity should be at least 1',
                  },
                  max: {
                     value: 1000,
                     message: 'Quantity should be no more than 1000',
                  },
               })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[7rem] no-spinners"
            />
         </FormRow>

         <FormRow label="Image" type="newItem" error={errors?.image?.message}>
            <input
               accept="image/*"
               type="file"
               autoComplete="nope"
               id="image"
               {...register('image', { required: 'This field is required' })}
               className="rounded-md px-1 py-1 bg-primary-100 dark:bg-primary-900 w-[23rem] transition-custom"
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

            <button className="bg-primary-100 dark:bg-primary-900 pr-6 pl-4 py-2 rounded-md hover:bg-primary-800 hover:text-primary-100  dark:hover:bg-primary-300 dark:hover:text-primary-900 transition-text flex items-center gap-1">
               {isCreating ? (
                  <>
                     <CgSpinner className="animate-spin mr-1 size-6" />
                     <span>Adding</span>
                  </>
               ) : (
                  <>
                     <HiOutlinePlusCircle /> <span>Add</span>
                  </>
               )}
            </button>
         </div>
      </motion.form>
   );
}

export default CreateItemForm;
