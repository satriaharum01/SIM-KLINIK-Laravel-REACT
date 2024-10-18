import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/page/dashboard';
import Pasien from './components/page/pasien'; // Import the DataTable component

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/admin/pasien" element={<Pasien />} />
    </Routes>
  );
};

export default AppRoutes;