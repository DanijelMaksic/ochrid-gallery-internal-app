import { useQuery } from '@tanstack/react-query';
import { getWishlists } from '../../services/apiWishlists';

export function useWishlists() {
   const { isPending: isLoading2, data: wishlists } = useQuery({
      queryFn: () => getWishlists(),
      queryKey: ['wishlists'],
   });

   return { isLoading2, wishlists };
}
