import { Route, Routes } from 'react-router';
import HomePage from './pages/Home/Home.page';
import AboutPage from './pages/About/About.page';
import CustomerPage from './pages/Customer/Customer.page';
import CustomerListPage from './pages/Customer/CustomerList.page';
import CustomerDetailPage from './pages/Customer/CustomerDetail.page';
import CustomerAddPage from './pages/Customer/CustomerAdd.page';
import Header from './containers/Header/Header';

function App() {


  return (
    <>
      <Header />
      <main>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />

          <Route path='customer' element={<CustomerPage />}>
            <Route index element={<CustomerListPage />} />
            <Route path=':id' element={<CustomerDetailPage />} />
            <Route path='add' element={<CustomerAddPage />} />
          </Route>

        </Routes>
      </main>
    </>
  );
}

export default App;
