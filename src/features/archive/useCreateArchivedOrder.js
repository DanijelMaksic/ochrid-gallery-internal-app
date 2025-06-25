import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createArchivedOrder as createArchivedOrderApi } from '../../services/apiArchive';

export function useCreateArchivedOrder() {
   const queryClient = useQueryClient();

   const { isPending: isArchiving, mutate: createArchivedOrder } = useMutation({
      mutationFn: createArchivedOrderApi,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['archive'],
         });
      },
      onError: (err) => toast.error(err.message),
   });

   return { isArchiving, createArchivedOrder };
}
