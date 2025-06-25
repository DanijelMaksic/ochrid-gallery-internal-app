import { motion } from 'motion/react';

function UsersSkeleton() {
   return (
      <>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 gap-12 relative animate-skeleton"
         >
            <span className="absolute inset-0 m-0 bg-gradient-to-t z-10 from-primary-50 dark:from-primary-950" />

            <UserSkeleton />
            <UserSkeleton />
            <UserSkeleton />
            <UserSkeleton />
            <UserSkeleton />
            <UserSkeleton />
         </motion.div>
      </>
   );
}

function UserSkeleton() {
   return (
      <span className="flex flex-col h-30 bg-primary-200 dark:bg-primary-700 rounded-lg transition-custom"></span>
   );
}

export default UsersSkeleton;
