import { useState } from 'react';

import { useLogin } from './useLogin';
import { CgSpinner } from 'react-icons/cg';

function LoginForm() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { login, isLoading } = useLogin();

   function handleSubmit(e) {
      e.preventDefault();
      if (!email || !password) return;

      login(
         { email, password },
         {
            onSettled: () => {
               setEmail('');
               setPassword('');
            },
         }
      );
   }

   return (
      <form
         onSubmit={handleSubmit}
         className={`rounded-lg overflow-hidden text-xl h-min flex flex-col transition-custom gap-3`}
      >
         <div label="Email" className="flex flex-col">
            <label className="font-semibold text-lg">Email</label>
            <input
               type="email"
               id="email"
               autoComplete="username"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="border-2 border-primary-400 dark:bg-primary-700 dark:border-primary-400 rounded-md px-4 py-1 focus-style transition-custom bg-primary-50 w-92"
            />
         </div>

         <div label="Password" className="flex flex-col">
            <label className="font-semibold text-lg">Password</label>
            <input
               type="password"
               id="password"
               autoComplete="current-password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="border-2 border-primary-400 dark:border-primary-400 dark:bg-primary-700 rounded-md px-4 py-1 focus-style transition-custom bg-primary-50 w-92"
            />
         </div>

         <button className="bg-primary-800 text-primary-50 font-semibold uppercase px-6 py-2 rounded-md mt-3 hover:bg-primary-900 transition-custom dark:bg-primary-950">
            {isLoading ? (
               <div className="flex gap-3 items-center justify-center py-0.5">
                  <CgSpinner className="animate-spin text-2xl" />
               </div>
            ) : (
               'Log in'
            )}
         </button>
      </form>
   );
}

export default LoginForm;
