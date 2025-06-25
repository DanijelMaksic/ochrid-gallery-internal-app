import toast from 'react-hot-toast';
import { editItem as editItemApi } from '../../services/apiItems';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useEditItem() {
   const queryClient = useQueryClient();

   const { isPending: isEditing, mutate: editItem } = useMutation({
      mutationFn: editItemApi,
      onSuccess: () => {
         toast.success('Item successfully edited');
         queryClient.invalidateQueries({
            queryKey: ['items'],
         });
      },
      onError: (err) => toast.error(err.message),
   });

   return { isEditing, editItem };
}
