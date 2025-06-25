import { useForm } from 'react-hook-form';
import { CgSpinner } from 'react-icons/cg';
import { useEditItem } from './useEditItem';
import { HiOutlinePencilAlt } from 'react-icons/hi';

import FormRow from '../../ui/FormRow';

function EditItemForm({ itemToEdit = {}, onClose }) {
   const { isEditing, editItem } = useEditItem();
   const { ...editValues } = itemToEdit;

   const { register, handleSubmit, formState, reset } = useForm({
      defaultValues: editValues,
   });
   const { errors } = formState;

   function onSubmitForm(data) {
      // Convert in_stock to boolean (it was string because of select html element)
      if (data.in_stock === 'true') data.in_stock = true;
      if (data.in_stock === 'false') data.in_stock = false;

      if (Number(data.quantity) === 0) data.in_stock = false;
      if (Number(data.quantity) > 0) data.in_stock = true;

      editItem(
         { ...data, newImage: data.image, oldImage: itemToEdit.image },
         {
            onSuccess: () => {
               reset();
               onClose?.();
            },
         }
      );
   }

   return (
      <form
         onSubmit={handleSubmit(onSubmitForm)}
         className={`bg-primary-0 dark:bg-primary-700 rounded-lg text-primary-900 dark:text-primary-100 overflow-hidden text-xl px-25 py-13 w-[57rem] h-min flex flex-col transition-custom ${
            isEditing && 'pointer-events-none'
         }`}
      >
         <FormRow label="Name" error={errors?.name?.message}>
            <input
               type="text"
               id="name"
               autoComplete="nope"
               {...register('name', { required: 'This field is required' })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[22rem]"
            />
         </FormRow>

         <FormRow label="Price" error={errors?.price?.message}>
            <input
               type="number"
               id="price"
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

         <FormRow label="Quantity" error={errors?.quantity?.message}>
            <input
               type="number"
               id="quantity"
               {...register('quantity', {
                  required: 'This field is required',
                  min: {
                     value: 0,
                     message: 'Quantity cannot be below 0',
                  },
               })}
               className="border-2 border-primary-400 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom w-[7rem] no-spinners"
            />
         </FormRow>

         <FormRow label="Image" error={errors?.image?.message}>
            <input
               accept="image/*"
               type="file"
               id="image"
               {...register('image')}
               className="rounded-md px-1 py-1 bg-primary-100 dark:bg-primary-900 w-[22rem] transition-custom"
            />
         </FormRow>

         <div className="self-end flex gap-6 mt-6">
            <button
               type="reset"
               onClick={reset}
               className="px-6 py-2 rounded-md border-2 border-secondary border-primary-0 dark:border-primary-700  hover:border-primary-400 dark:hover:border-primary-400 transition-text"
            >
               Clear
            </button>

            <button className="bg-primary-100 dark:bg-primary-900 pr-6 pl-5 py-2 rounded-md hover:bg-primary-800 hover:text-primary-100  dark:hover:bg-primary-300 dark:hover:text-primary-900 font-semibolddark:hover:text-primary-900 transition-text flex items-center gap-1">
               {isEditing ? (
                  <>
                     <CgSpinner className="animate-spin mr-1 size-6" />
                     <span>Editing</span>
                  </>
               ) : (
                  <>
                     <HiOutlinePencilAlt /> <span>Edit</span>
                  </>
               )}
            </button>
         </div>
      </form>
   );
}

export default EditItemForm;
