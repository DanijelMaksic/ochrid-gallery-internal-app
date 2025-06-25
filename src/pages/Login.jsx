import Logo from '../ui/Logo';
import LoginForm from '../features/authentication/LoginForm';

import { motion } from 'motion/react';

function Login() {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className="bg-primary-50 dark:bg-primary-950 h-screen flex items-center justify-center text-primary-900 dark:text-primary-100 flex-col gap-6"
      >
         <Logo type="login" />

         <h2 className="font-semibold text-3xl mt-1">Log in to your account</h2>

         <div className="flex flex-col items-center gap-8 bg-primary-200 dark:bg-primary-700 px-16 py-8 rounded-md mb-32 border-2 dark:border-primary-600 border-primary-300">
            <LoginForm />
         </div>
      </motion.div>
   );
}

export default Login;
