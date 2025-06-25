import { ImSpinner8 } from 'react-icons/im';

function CalcSpinner() {
   return (
      <div className="flex flex-col gap-3 bg-primary-0 dark:bg-primary-700 p-3 rounded-lg transition-custom pb-10 h-116 border-2 border-primary-300 dark:border-primary-600">
         <div className="flex items-center justify-center h-100">
            <ImSpinner8 className="text-7xl text-primary-700 rotate dark:text-primary-400" />
         </div>
      </div>
   );
}

export default CalcSpinner;
