function OrderCustomerCard({ order }) {
   const {
      full_name,
      adress,
      email,
      city,
      post_code,
      phone,
      country,
      payment_method,
   } = order;

   return (
      <div className="flex flex-col bg-primary-0 dark:bg-primary-700 px-10 py-8 rounded-lg border-2 border-primary-200 dark:border-primary-600 transition-custom">
         <div className="flex flex-col gap-3 text-lg">
            <h3 className="text-3xl">Contact Info</h3>

            <div className="flex flex-col gap-1 text-primary-800 dark:text-primary-200">
               <span>{full_name}</span>
               <span>{email}</span>
               <span>+{phone}</span>
            </div>

            <h3 className="text-3xl mt-3">Shipping Details</h3>

            <div className="flex flex-col gap-1 text-primary-800 dark:text-primary-200">
               <span>{adress}</span>
               <span>
                  {city} {post_code}
               </span>
               <span>{country}</span>
            </div>

            <div className="flex flex-col gap-1 text-primary-800 dark:text-primary-200"></div>

            <h3 className="text-3xl mt-3">Payment Method</h3>

            {payment_method === 'cash' && (
               <span className="text-primary-800 dark:text-primary-200">
                  By Cash
               </span>
            )}
            {payment_method === 'card' && (
               <span className="text-primary-800 dark:text-primary-200">
                  By Debit Card
               </span>
            )}
         </div>
      </div>
   );
}

export default OrderCustomerCard;
