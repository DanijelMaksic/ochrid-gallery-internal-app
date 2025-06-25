function Stat({ icon, title, value, color, colorDark }) {
   return (
      <div className="bg-primary-0 dark:bg-primary-800 rounded-md border-2 border-primary-200 px-4 py-4 grid grid-cols-[4rem_1fr] gap-4 items-center dark:border-primary-500 transition-custom">
         <span
            className={`${color} ${colorDark} aspect-square rounded-full flex items-center justify-center transition-custom`}
         >
            {icon}
         </span>
         <div className="flex flex-col">
            <h2 className="text-lg uppercase font-semibold text-primary-800 dark:text-primary-200">
               {title}
            </h2>
            <span className="text-2xl font-semibold">
               {value < 1 || !value ? <span>&mdash;</span> : value}
            </span>
         </div>
      </div>
   );
}

export default Stat;
