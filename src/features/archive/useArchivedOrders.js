import { useQuery } from '@tanstack/react-query';
import { getArchivedOrders } from '../../services/apiArchive';

export function useArchivedOrders() {
   const {
      isPending: isLoading,
      data: archivedOrders,
      error,
   } = useQuery({
      queryKey: ['archivedOrders'],
      queryFn: getArchivedOrders,
   });
   return { isLoading, archivedOrders, error };
}
