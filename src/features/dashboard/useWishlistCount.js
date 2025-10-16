import { useQuery } from '@tanstack/react-query';
import { getWishlistCount } from '../../services/apiWishlistCount';

export function useWishlistCount() {
   const { isPending: isLoading2, data: wishlistCount } = useQuery({
      queryFn: () => getWishlistCount(),
      queryKey: ['wishlistCount'],
   });

   return { isLoading2, wishlistCount };
}
