import { motion } from 'motion/react';

function Row({ type, children }) {
   const horizontalStyles = 'justify-between items-center';
   const verticalStyles = 'flex-col gap-4';

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.3 }}
         className={`flex ${
            type === 'horizontal' ? horizontalStyles : verticalStyles
         }`}
      >
         {children}
      </motion.div>
   );
}

export default Row;
