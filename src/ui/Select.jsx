function Select({ options, value, onChange }) {
   return (
      <select
         value={value}
         onChange={onChange}
         className="text-lg px-3 py-[0.57rem] border-2 border-primary-300 dark:border-primary-500 bg-primary-0 dark:bg-primary-700 font-semibold rounded-md transition-custom rounded-l-none w-[13.8rem] outline-none"
      >
         {options.map((option) => (
            <option value={option.value} key={option.value}>
               {option.label}
            </option>
         ))}
      </select>
   );
}

export default Select;
