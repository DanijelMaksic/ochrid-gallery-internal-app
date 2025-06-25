import { useQuery } from '@tanstack/react-query';
import { getOrdersToday } from '../../services/apiOrders';

export function useTodayActivity() {
   const { isPending: isLoading, data: orders } = useQuery({
      queryFn: getOrdersToday,
      queryKey: ['today-activity'],
   });
   return { orders, isLoading };
}
