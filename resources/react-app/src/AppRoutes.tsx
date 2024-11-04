import { Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AuthLayout } from './layouts/auth';
import { DashboardLayout } from './layouts/dashboard';

import Dashboard from './components/page/dashboard';
import Pasien from './components/page/pasien';
import LoginPage from './components/page/login';
import Page404 from './components/page/login';




const AppRoutes = () => {

  return (

    <Router>
      <Routes>
        <Route path="/" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>} />
        <Route path="/admin/pasien" element={
          <DashboardLayout>
            <Pasien />
          </DashboardLayout>} />
          <Route path="/login" element={<AuthLayout><LoginPage /></AuthLayout>} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </Router >
  );

};

export default AppRoutes;