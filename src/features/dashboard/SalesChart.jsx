import {
   Area,
   AreaChart,
   CartesianGrid,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from 'recharts';
import { useDarkMode } from '../../context/DarkModeContext';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';

function SalesChart({ archivedOrders, numDays }) {
   const { isDarkMode } = useDarkMode();

   const allDates = eachDayOfInterval({
      start: subDays(new Date(), numDays - 1),
      end: new Date(),
   });

   const data = allDates.map((date) => {
      return {
         label: format(date, 'MMM dd'),
         total: archivedOrders
            .filter((order) => isSameDay(date, new Date(order.archived_at)))
            .reduce((acc, cur) => {
               const [cart] = JSON.parse(cur.cart);
               return acc + cart.orderTotal;
            }, 0),
      };
   });

   const colors = isDarkMode
      ? {
           total: { stroke: '#b39f8b', fill: '#7f7368' },
           text: '#d5c5b6',
           background: 'rgba(84, 77, 68, 0.5)',
           shadow: 'rgba(53, 49, 45, 0.75)',
           tpColor: '#efe7dd',
        }
      : {
           total: { stroke: '#5a5248', fill: '#b39f8b' },
           text: '#7f7368',
           background: 'rgba(255, 255, 255, 0.4)',
           shadow: 'rgba(187, 168, 147, 0.5)',
           tpColor: '#35312d',
        };

   return (
      <div className="sales-chart bg-primary-0 rounded-md px-12 py-6 dark:bg-primary-800 border-2 border-primary-200 dark:border-primary-600 transition-custom">
         <h2 className="text-2xl font-semibold mb-3">
            Sales from {format(allDates.at(0), 'MMM dd yyyy')} &mdash;{' '}
            {format(allDates.at(-1), 'MMM dd yyyy')}
         </h2>

         <ResponsiveContainer height={300} width="100%">
            <AreaChart data={data}>
               <XAxis
                  dataKey="label"
                  tick={{ fill: colors.text }}
                  tickLine={{ stroke: colors.text }}
               />
               <YAxis
                  unit="€"
                  tick={{ fill: colors.text }}
                  tickLine={{ stroke: colors.text }}
               />
               <CartesianGrid strokeDasharray="4" />
               <Tooltip
                  contentStyle={{
                     backgroundColor: colors.background,
                     backdropFilter: 'blur(15px)',
                     padding: '12px 24px',
                     border: 'none',
                     color: colors.tpColor,
                     borderRadius: '14px',
                     boxShadow: `0 6px 20px ${colors.shadow}`,
                  }}
               />
               <Area
                  dataKey="total"
                  type="monotone"
                  stroke={colors.total.stroke}
                  fill={colors.total.fill}
                  strokeWidth={1.5}
                  name="Total sales"
                  unit="€"
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
}

export default SalesChart;
