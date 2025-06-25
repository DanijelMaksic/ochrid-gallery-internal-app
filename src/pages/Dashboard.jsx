import Row from '../ui/Row';
import DashboardFilter from '../features/dashboard/DashboardFilter';
import DashboardLayout from '../features/dashboard/DashboardLayout';

function Dashboard() {
   return (
      <>
         <Row type="horizontal">
            <h1 className="text-4xl font-semibold transition-text">
               Dashboard
            </h1>
            <DashboardFilter />
         </Row>

         <DashboardLayout />
      </>
   );
}

export default Dashboard;
