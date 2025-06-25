import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOrder as deleteOrderApi } from '../../services/apiOrders';

export function useDeleteOrder() {
   const queryClient = useQueryClient();
   const navigate = useNavigate();

   const { isPending: isDeleting, mutate: deleteOrder } = useMutation({
      mutationFn: deleteOrderApi,
      onSuccess: () => {
         toast.success('Order successfully deleted');
         queryClient.invalidateQueries({
            queryKey: ['orders'],
         });
         navigate(-1);
      },
      onError: (err) => toast.error(err.message),
   });
   return { isDeleting, deleteOrder };
}
