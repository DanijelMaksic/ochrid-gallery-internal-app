import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrder as createOrderApi } from '../../services/apiOrders';


export function useCreateOrder() {
   const queryClient = useQueryClient();

   const { isPending: isCreating, mutate: createOrder } = useMutation({
      mutationFn: createOrderApi,
      onSuccess: () => {
         toast.success('New order successfully created');
         queryClient.invalidateQueries({
            queryKey: ['orders'],
         });
      },
      onError: (err) => toast.error(err.message),
   });

   return { isCreating, createOrder };
}
