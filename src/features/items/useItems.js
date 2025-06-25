import { useQuery } from '@tanstack/react-query';
import { getItems } from '../../services/apiItems';

export function useItems() {
   const {
      isPending: isLoading,
      data: items,
      error,
   } = useQuery({
      queryKey: ['items'],
      queryFn: getItems,
   });
   return { isLoading, items, error };
}
