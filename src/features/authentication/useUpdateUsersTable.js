import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUsersTable as updateUsersTableApi } from '../../services/apiAuth';

export function useUpdateUsersTable() {
   const queryClient = useQueryClient();

   const { isPending: isUpdating, mutate: updateUsersTable } = useMutation({
      mutationFn: updateUsersTableApi,
      onSuccess: () => {
         queryClient.invalidateQueries({
            queryKey: ['users'],
         });
      },
   });

   return { isUpdating, updateUsersTable };
}
