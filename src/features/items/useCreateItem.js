import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createItem as createItemApi } from '../../services/apiItems';

export function useCreateItem() {
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const { isPending: isCreating, mutate: createItem } = useMutation({
      mutationFn: createItemApi,
      onSuccess: () => {
         toast.success('New item successfully created');
         queryClient.invalidateQueries({
            queryKey: ['items'],
         });
         navigate('/items');
      },
      onError: (err) => toast.error(err.message),
   });

   return { isCreating, createItem };
}
