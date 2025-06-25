import Row from '../Row';
import { motion } from 'motion/react';

function OrderSkeleton() {
   return (
      <>
         <Row type="horizontal">
            <div className="flex gap-6">
               <span className="w-9 h-9 bg-primary-200 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom"></span>
               <h1 className="w-51 h-9 bg-primary-200 dark:bg-primary-600 rounded-lg animate-skeleton transition-custom"></h1>
            </div>
         </Row>

         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-[2fr_1.1fr] gap-6 animate-skeleton"
         >
            {/* Order Info Card */}
            <div className="flex flex-col gap-3 bg-primary-200 dark:bg-primary-600 p-3 rounded-lg transition-custom pb-10 animate-skeleton"></div>
            {/* Order Customer Card */}
            <div className="flex flex-col h-120 bg-primary-200 dark:bg-primary-600 px-12 py-8 rounded-lg transition-custom"></div>
         </motion.div>
      </>
   );
}

export default OrderSkeleton;
