import { useSearchParams } from 'react-router-dom';

import { subDays } from 'date-fns';
import { useQuery } from '@tanstack/react-query';
import { getArchivedOrdersAfterDate } from '../../services/apiArchive';

export function useRecentArchivedOrders() {
   const [searchParams] = useSearchParams();

   const numDays = !searchParams.get('last')
      ? 7
      : Number(searchParams.get('last'));

   const queryDate = subDays(new Date(), numDays).toISOString();

   const { isPending: isLoading1, data: archivedOrders } = useQuery({
      queryFn: () => getArchivedOrdersAfterDate(queryDate),
      queryKey: ['archive', `last-${numDays}`],
   });

   return { isLoading1, archivedOrders, numDays };
}
