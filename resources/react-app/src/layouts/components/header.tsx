import React, { useEffect, useState } from 'react';
import Api from '../../api';

const Header = () => {
  const [appName, setAppName] = useState('');

  useEffect(() => {
    Api.get('/api/app-name')
      .then(response => {
        setAppName(response.data.app_name); // Set the app name from the API response
      })
      .catch(error => console.error('Error fetching app name:', error));
  }, []);

  return (
    <header className="app-header">
      <a className="app-header__logo" href="index.html">{appName}</a>
      <a className="app-sidebar__toggle" href="#" data-toggle="sidebar" aria-label="Hide Sidebar"></a>
      <ul className="app-nav">
        <li className="app-search">
          <input className="app-search__input" type="search" placeholder="Search" />
          <button className="app-search__button"><i className="bi bi-search"></i></button>
        </li>
        <li className="dropdown">
          <a className="app-nav__item" href="#" data-bs-toggle="dropdown" aria-label="Show notifications">
            <i className="bi bi-bell fs-5"></i>
          </a>
          <ul className="app-notification dropdown-menu dropdown-menu-right">
            <li className="app-notification__title">You have 4 new notifications.</li>
            {/* Other notification items */}
          </ul>
        </li>
        <li className="dropdown">
          <a className="app-nav__item" href="#" data-bs-toggle="dropdown" aria-label="Open Profile Menu">
            <i className="bi bi-person fs-4"></i>
          </a>
          <ul className="dropdown-menu settings-menu dropdown-menu-right">
            <li><a className="dropdown-item" href="page-user.html"><i className="bi bi-gear me-2 fs-5"></i> Settings</a></li>
            <li><a className="dropdown-item" href="page-login.html"><i className="bi bi-box-arrow-right me-2 fs-5"></i> Logout</a></li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;