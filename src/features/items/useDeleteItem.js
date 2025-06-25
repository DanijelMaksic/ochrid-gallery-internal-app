import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem as deleteItemApi } from '../../services/apiItems';

export function useDeleteItem() {
   const queryClient = useQueryClient();

   const { isPending: isDeleting, mutate: deleteItem } = useMutation({
      mutationFn: deleteItemApi,
      onSuccess: () => {
         toast.success('Table item successfully deleted');
         queryClient.invalidateQueries({
            queryKey: ['items'],
         });
      },
      onError: (err) => toast.error(err.message),
   });
   return { isDeleting, deleteItem };
}
