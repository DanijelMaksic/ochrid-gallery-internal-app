import { useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';
import { login as loginApi } from '../../services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useLogin() {
   const navigate = useNavigate();
   const queryClient = useQueryClient();

   const { mutate: login, isPending: isLoading } = useMutation({
      mutationFn: ({ email, password }) => loginApi({ email, password }),
      onSuccess: (user) => {
         queryClient.setQueriesData(['user', user.user]);
         navigate('/dashboard', { replace: true });
      },
      onError: () => {
         toast.error('Provided email or password are incorrect');
      },
   });

   return { login, isLoading };
}
