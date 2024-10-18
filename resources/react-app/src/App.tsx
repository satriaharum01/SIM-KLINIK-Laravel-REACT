// src/App.js
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './components/css/main.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import AppRoutes from './AppRoutes';

const TITLE = 'Dental Medan';

function App() {
    return (
        <Router>
            <div className="app sidebar-mini">

                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <Header />
                <Sidebar />
                <AppRoutes /> {/* Render routes from the separate file */}
            </div>
        </Router>
    );
}

export default App;
