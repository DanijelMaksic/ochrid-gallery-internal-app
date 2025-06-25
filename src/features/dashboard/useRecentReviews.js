import { useSearchParams } from 'react-router-dom';

import { subDays } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getReviewsAfterDate } from '../../services/apiReviews';

export function useRecentReviews() {
   const [searchParams] = useSearchParams();

   const numDays = !searchParams.get('last')
      ? 7
      : Number(searchParams.get('last'));

   const queryDate = subDays(new Date(), numDays).toISOString();

   const { isPending: isLoading, data: reviews } = useQuery({
      queryFn: () => getReviewsAfterDate(queryDate),
      queryKey: ['reviews', `last-${numDays}`],
   });

   return { isLoading, reviews, numDays };
}
