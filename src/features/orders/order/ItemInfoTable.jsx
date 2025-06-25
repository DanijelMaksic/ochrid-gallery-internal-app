import { Link } from 'react-router-dom';

import { formatCurrency } from '../../../utils/helpers';
import { useItems } from '../../items/useItems';

function ItemInfoTable({ cart }) {
   return (
      <div role="table" className="flex flex-col px-12 py-6 text-xl">
         <Header />
         {cart.map((item) => (
            <Row
               itemId={item.itemId}
               quantity={item.cartQuantity}
               total={item.total}
               key={item.itemId}
            />
         ))}
      </div>
   );
}

function Header() {
   return (
      <div
         role="row"
         className="grid grid-cols-[2fr_1fr_0.5fr] gap-12 border-b-2 border-primary-200 dark:border-primary-500 pb-1 text-primary-800 dark:text-primary-300 transition-custom"
      >
         <span>Item</span>
         <span>Quantity</span>
         <span>Total</span>
      </div>
   );
}

function Row({ itemId, quantity, total }) {
   const { items, isLoading } = useItems();

   if (isLoading)
      return <div className="text-primary-800 py-7.5">Loading...</div>;

   const item = items.find((item) => item.id === itemId);
   const name = item.name;

   return (
      <div
         role="row"
         className="grid grid-cols-[2fr_1fr_0.5fr] gap-12 py-4 border-b-2 border-primary-200 dark:border-primary-500 transition-custom"
      >
         <Link to={`/items/${itemId}`}>
            <button className="underlined-text text-left">
               {name.length > 28 ? `${name.slice(0, 30)}...` : name}
            </button>
         </Link>

         <span className="self-center">{quantity}</span>

         <span className="self-center">{formatCurrency(total)}</span>
      </div>
   );
}

export default ItemInfoTable;
