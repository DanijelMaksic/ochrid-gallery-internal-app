import { createContext, useContext } from 'react';

import { PAGE_SIZE } from '../utils/config';
import { motion } from 'motion/react';

const TableContext = createContext();

function Table({ columns, children, data }) {
   return (
      <TableContext.Provider value={{ columns, data }}>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            role="table"
            className="rounded-lg border-2 border-primary-300 dark:border-primary-600 transition-custom mb-24"
         >
            {children}
         </motion.div>
      </TableContext.Provider>
   );
}

function Header({ children }) {
   const { columns } = useContext(TableContext);

   return (
      <div
         role="row"
         className={`grid ${columns} items-center gap-10 text-2xl py-2 font-semibold border-primary-300 dark:border-primary-600 dark:bg-primary-900 border-b-2 bg-primary-100 transition-custom rounded-t-[6px]`}
      >
         {children}
      </div>
   );
}

function Row({ children }) {
   const { columns, data } = useContext(TableContext);

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         role="row"
         className={`grid ${columns} items-center text-2xl gap-10 bg-primary-50 dark:bg-primary-800 odd:bg-primary-0 dark:odd:bg-primary-700 transition-custom ${
            data?.length > PAGE_SIZE + 1 ? '' : 'round last:rounded-b-[6px]'
         }`}
      >
         {children}
      </motion.div>
   );
}

function Body({ data, render }) {
   return <div>{data?.map(render)}</div>;
}

function Footer({ children }) {
   return <div>{children}</div>;
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
