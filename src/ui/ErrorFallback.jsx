function ErrorFallback({ resetErrorBoundary }) {
   return (
      <div className="bg-primary-50 dark:bg-primary-950 h-screen flex items-center justify-center text-primary-900 dark:text-primary-100">
         <div className="flex flex-col items-center gap-8 bg-primary-200 dark:bg-primary-700 px-20 py-10 rounded-md mb-32 border-2 dark:border-primary-600 border-primary-300">
            <p className="text-5xl">Something went wrong...</p>
            <button
               className="text-xl underlined-text"
               onClick={resetErrorBoundary}
            >
               &larr; &nbsp;Go back
            </button>
         </div>
      </div>
   );
}

export default ErrorFallback;
