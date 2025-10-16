import { TbHeartPlus } from 'react-icons/tb';
import { useWishlistCount } from './useWishlistCount';
import { HiOutlineChartBar } from 'react-icons/hi';
import { formatCurrency } from '../../utils/helpers';
import { HiOutlineBanknotes } from 'react-icons/hi2';
import { MdOutlineRateReview } from 'react-icons/md';
import { useRecentReviews } from './useRecentReviews';
import { StatSkeleton } from '../../ui/skeletons/DashboardSkeleton';

import Stat from './Stat';

function Stats({ archivedOrders }) {
   const { reviews, isLoading } = useRecentReviews();
   const { wishlistCount, isLoading2 } = useWishlistCount();

   if (isLoading || isLoading2)
      return (
         <>
            <StatSkeleton />
            <StatSkeleton />
            <StatSkeleton />
            <StatSkeleton />
         </>
      );

   let sales;
   let carts;
   let orderTotals;
   let cartQuantitiesArr;
   let itemsSold;

   if (archivedOrders.length) {
      carts = archivedOrders.map((item) => JSON.parse(item.cart));

      // Calculating SALES
      orderTotals = carts.map((item) => item[0].orderTotal);
      sales = orderTotals.reduce((acc, cur) => acc + cur, 0);

      // Calculating NUMBER OF SOLD ITEMS
      cartQuantitiesArr = carts.flat().map((item) => item.cartQuantity);
      itemsSold = cartQuantitiesArr.reduce((acc, cur) => acc + cur, 0);
   }

   return (
      <>
         <Stat
            title="Sales"
            color="bg-[#ceefd4]"
            colorDark="dark:bg-[#2c5333]"
            icon={
               <HiOutlineBanknotes className="text-3xl text-[#2f823d] dark:text-[#CBEAD0]" />
            }
            value={
               sales < 1 || !archivedOrders.length ? (
                  <span>&mdash;</span>
               ) : (
                  formatCurrency(sales)
               )
            }
         />

         <Stat
            title="Icons Sold"
            color="bg-[#FBEDDC]"
            colorDark="dark:bg-[#6C5230]"
            icon={
               <HiOutlineChartBar className="text-3xl text-[#A97C41] dark:text-[#EADAC7]" />
            }
            value={itemsSold}
         />

         <Stat
            title="Whishlists"
            color="bg-[#fddadf]"
            colorDark="dark:bg-[#6b3032]"
            icon={
               <TbHeartPlus className="text-3xl text-[#a74043] dark:text-[#FBDBE0]" />
            }
            value={wishlistCount}
         />

         <Stat
            title="Reviews"
            color="bg-[#DBE6F3]"
            colorDark="dark:bg-[#203B43]"
            icon={
               <MdOutlineRateReview className="text-3xl text-[#285D69] dark:text-[#CAD7E8]" />
            }
            value={reviews.length}
         />
      </>
   );
}

export default Stats;
