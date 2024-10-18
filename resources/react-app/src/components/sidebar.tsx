import React from 'react';
import { NavLink ,Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="app-sidebar" style={{backgroundColor: ""}}>
      <div className="app-sidebar__user">
        <img className="app-sidebar__user-avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
        <div>
          <p className="app-sidebar__user-name">John Doe</p>
          <p className="app-sidebar__user-designation">Frontend Developer</p>
        </div>
      </div>
      <ul className="app-menu">
        <li><NavLink className="app-menu__item" to="/" activeClassName="active"><i className="app-menu__icon bi bi-speedometer"></i><span className="app-menu__label">Dashboard</span></NavLink></li>
        <li><NavLink className="app-menu__item" to="/admin/pasien" activeClassName="active"><i className="app-menu__icon bi bi-person-badge"></i><span className="app-menu__label">Data Pasien</span></NavLink></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
