import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

import { motion } from 'motion/react';
import { HiXMark } from 'react-icons/hi2';

function Modal({ children, onClose }) {
   const ref = useRef();

   useEffect(() => {
      function handleClick(e) {
         if (ref.current && !ref.current.contains(e.target)) {
            onClose?.();
         }
      }

      const handleEscape = (e) => {
         if (!ref.current) return;
         if (e.key === 'Tab') e.preventDefault();
         if (e.key === 'Escape') onClose?.();
      };

      document.addEventListener('click', handleClick, true);
      document.addEventListener('keydown', handleEscape, true);
      return () => {
         document.removeEventListener('click', handleClick, true);
         document.removeEventListener('keydown', handleEscape, true);
      };
   }, [onClose]);

   return createPortal(
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         className="fixed top-0 left-0 w-[100%] h-screen bg-primary-800/10 dark:bg-black/20 z-10 backdrop-blur-sm transition-custom"
      >
         <div
            ref={ref}
            className="fixed top-[46%] left-[50%] translate-[-50%] shadow-2xl   dark:shadow-modal_shadow transition-custom"
         >
            <button
               type="button"
               onClick={onClose}
               className="absolute transition-text top-2 right-2 p-2 rounded-xl text-3xl text-primary-700 dark:text-primary-300 hover:bg-primary-50 dark:hover:bg-primary-900
               hover:text-primary-800
               dark:hover:text-primary-200"
            >
               <HiXMark />
            </button>
            {children}
         </div>
      </motion.div>,
      document.body
   );
}

export default Modal;
