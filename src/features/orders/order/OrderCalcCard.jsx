import NoteAndCalc from './NoteAndCalc';
import ItemInfoTable from './ItemInfoTable';
import OrderDateInfo from './OrderDateInfo';

function OrderCalcCard({ order }) {
   const { created_at, id: orderId, note, cart: cartString } = order;

   const cart = JSON.parse(cartString);

   return (
      <div className="flex flex-col gap-3 bg-primary-0 dark:bg-primary-700 p-3 rounded-lg border-2 border-primary-200 dark:border-primary-600 transition-custom pb-10">
         <OrderDateInfo created_at={created_at} orderId={orderId} />
         <ItemInfoTable cart={cart} />
         <NoteAndCalc note={note} orderTotal={cart[0].orderTotal} />
      </div>
   );
}

export default OrderCalcCard;
