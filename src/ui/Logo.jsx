function Logo({ type }) {
   return (
      <p
         className={`${
            type === 'login' ? 'pb-2 text-5xl' : 'pt-8 pb-10 text-6xl'
         } px-6 w-min text-center font-logo self-center transition-text`}
      >
         Ochrid Gallery
      </p>
   );
}

export default Logo;
