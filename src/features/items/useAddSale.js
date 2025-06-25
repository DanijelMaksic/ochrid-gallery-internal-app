import toast from 'react-hot-toast';
import { addSale as addSaleApi } from '../../services/apiItems';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export function useAddSale() {
   const queryClient = useQueryClient();

   const { isPending: isAdding, mutate: addSale } = useMutation({
      mutationFn: addSaleApi,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['items'],
         });
      },
      onError: (err) => toast.error(err.message),
   });

   return { isAdding, addSale };
}
