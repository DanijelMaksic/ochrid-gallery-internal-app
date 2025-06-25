import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteArchivedOrder as deleteArchivedOrderApi } from '../../services/apiArchive';

export function useDeleteArchivedOrder() {
   const queryClient = useQueryClient();
   const navigate = useNavigate();

   const { isPending: isDeleting, mutate: deleteArchivedOrder } = useMutation({
      mutationFn: deleteArchivedOrderApi,
      onSuccess: () => {
         toast.success('Order successfully deleted');
         queryClient.invalidateQueries({
            queryKey: ['archive'],
         });
         navigate(-1);
      },
      onError: (err) => toast.error(err.message),
   });
   return { isDeleting, deleteArchivedOrder };
}
