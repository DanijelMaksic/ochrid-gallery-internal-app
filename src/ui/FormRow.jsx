function FormRow({ label, error, children, type }) {
   return (
      <div
         className={`grid items-center gap-6 py-4 border-b-1 border-primary-400 dark:border-primary-400 transition-custom ${
            type === 'signup' && 'grid-cols-[2.2fr_4fr_2fr]'
         } ${
            type === 'newItem'
               ? 'grid-cols-[1fr_4fr_2fr]'
               : 'grid-cols-[1.27fr_4fr_2fr]'
         }`}
      >
         {label && (
            <label htmlFor={children.props.id} className="transition-text">
               {label}
               {error && (
                  <span className="text-required transition-text">*</span>
               )}
            </label>
         )}
         {children}
         {error && (
            <span className="text-required transition-text">*{error}</span>
         )}
      </div>
   );
}

export default FormRow;
