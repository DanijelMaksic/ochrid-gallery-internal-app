import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteOrderOnArchive as deleteOrderApi } from '../../services/apiOrders';

export function useDeleteOrderOnArchive() {
   const queryClient = useQueryClient();
   const navigate = useNavigate();

   const { isPending: isDeleting2, mutate: deleteOrderOnArchive } = useMutation(
      {
         mutationFn: deleteOrderApi,
         onSuccess: () => {
            queryClient.invalidateQueries({
               queryKey: ['orders'],
            });
            navigate(-1);
         },
         onError: (err) => toast.error(err.message),
      }
   );
   return { isDeleting2, deleteOrderOnArchive };
}
