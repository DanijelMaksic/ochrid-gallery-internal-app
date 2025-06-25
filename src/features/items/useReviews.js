import { useQuery } from '@tanstack/react-query';
import { getReviews } from '../../services/apiReviews';

export function useReviews() {
   const { isPending: isLoading, data: reviews } = useQuery({
      queryFn: () => getReviews(),
      queryKey: ['reviews'],
   });

   return { isLoading, reviews };
}
