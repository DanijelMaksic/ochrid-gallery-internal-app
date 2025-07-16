import { createContext, useContext, useEffect, useRef, useState } from 'react';

import { motion } from 'motion/react';
import { HiEllipsisVertical } from 'react-icons/hi2';

const MenusContext = createContext();

function Menus({ children }) {
   const [openId, setOpenId] = useState();

   const close = () => setOpenId('');
   const open = setOpenId;

   return (
      <MenusContext.Provider value={{ openId, close, open }}>
         <Menu>{children}</Menu>
      </MenusContext.Provider>
   );
}

function Menu({ children }) {
   return <div className="relative max-w-370">{children}</div>;
}

function Toggle({ id }) {
   const { openId, close, open } = useContext(MenusContext);

   function handleClick(e) {
      e.stopPropagation();
      openId === '' || openId !== id ? open(id) : close();
   }

   return (
      <button
         onClick={handleClick}
         className="bg-none border-none rounded-md translate-x-3 transition-custom hover:bg-primary-300 dark:hover:bg-primary-950 p-2"
      >
         <HiEllipsisVertical />
      </button>
   );
}

function List({ id, children }) {
   const { openId, close } = useContext(MenusContext);
   const ref = useRef();

   useEffect(() => {
      function handleClick(e) {
         if (ref.current && !ref.current.contains(e.target)) {
            close();
         }
      }

      const handleEscape = (e) => {
         if (!ref.current) return;
         if (e.key === 'Tab') e.preventDefault();
         if (e.key === 'Escape') close();
      };

      document.addEventListener('click', handleClick, false);
      document.addEventListener('keydown', handleEscape, false);
      return () => {
         document.removeEventListener('click', handleClick, false);
         document.removeEventListener('keydown', handleEscape, false);
      };
   }, [close]);

   if (openId !== id) return null;

   return (
      <motion.ul
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.2 }}
         ref={ref}
         className="absolute border border-primary-500 right-[34px] top-11 shadow-lg rounded-lg overflow-hidden bg-primary-0 dark:bg-primary-600 transition-custom z-10"
      >
         {children}
      </motion.ul>
   );
}

function Button({ children, icon, onClick }) {
   const { close } = useContext(MenusContext);

   function handleClick() {
      onClick?.();
      close();
   }

   return (
      <li
         onClick={handleClick}
         className="w-full text-left bg-none hover:bg-primary-100 dark:hover:bg-primary-900 flex items-center gap-3 cursor-pointer pl-5 pr-6 py-2 text-lg transition-custom"
      >
         {icon} <span>{children}</span>
      </li>
   );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
