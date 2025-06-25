import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import { DarkModeProvider } from './context/DarkModeContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Item from './pages/Item';
import Layout from './ui/Layout';
import Items from './pages/Items';
import Order from './pages/Order';
import Login from './pages/Login';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Archive from './pages/Archive';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';
import ItemCreator from './pages/ItemCreator';
import PageNotFound from './pages/PageNotFound';
import ProtectedRoute from './ui/ProtectedRoute';
import ArchivedOrder from './pages/ArchivedOrder';

const queryClient = new QueryClient({
   defaultOptions: {
      staleTime: 60 * 1000,
   },
});

function App() {
   return (
      <DarkModeProvider>
         <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <BrowserRouter>
               <Routes>
                  <Route
                     element={
                        <ProtectedRoute>
                           <Layout />
                        </ProtectedRoute>
                     }
                  >
                     <Route
                        index
                        element={<Navigate replace to="dashboard" />}
                     />
                     <Route path="dashboard" element={<Dashboard />} />
                     <Route path="create-item" element={<ItemCreator />} />
                     <Route path="items" element={<Items />} />
                     <Route path="items/:id" element={<Item />} />
                     <Route path="orders" element={<Orders />} />
                     <Route path="orders/:id" element={<Order />} />
                     <Route path="archive" element={<Archive />} />
                     <Route path="archive/:id" element={<ArchivedOrder />} />
                     <Route path="users" element={<Users />} />
                     <Route path="account" element={<Account />} />
                  </Route>
                  <Route path="Login" element={<Login />} />
                  <Route path="*" element={<PageNotFound />} />
               </Routes>
            </BrowserRouter>

            <Toaster
               position="top-center"
               gutter={12}
               containerStyle={{ margin: '8px' }}
               toastOptions={{
                  success: {
                     duration: 4000,
                  },
                  error: {
                     duration: 6000,
                  },
                  style: {
                     fontSize: '18px',
                     maxWidth: '500px',
                     padding: '12px 20px',
                     backgroundColor: 'var(--color-toast)',
                     color: 'var(--color-toast_text)',
                  },
               }}
            />
         </QueryClientProvider>
      </DarkModeProvider>
   );
}

export default App;
