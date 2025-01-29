import React, { useState,useLayoutEffect } from 'react';
import {
  faHome,
  faBuilding,
  faCalendar,
  faFolder,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import logoImage from '../css/assets/images/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../css/dashboard.css';

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  

  useLayoutEffect(() => {
    // This hook could be extended if additional side effects are needed when activeTab changes.
    console.log(`Active tab is: ${activeTab}`);
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <Link to="/Ebn">
            <img src={logoImage} alt="Logo" className="company-logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <FontAwesomeIcon icon={faHome} className={`nav-icon ${activeTab === "Dashboard" ? "bg-active" : ""}`} />
              <button onClick={() => handleTabChange("Dashboard")}>
                <Link to="/dashboard" className="manka">Dashboard</Link>
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} className={`nav-icon ${activeTab === "Companies" ? "bg-active" :""}`} />
              <button onClick={() => handleTabChange("Companies")}>
                <Link to="/DashboardCompany" className="manka">Companies</Link>
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} className={`nav-icon ${activeTab === "Events" ? "bg-active" : ""}`} />
              <button onClick={() => handleTabChange("Events")}>
                <Link to="/DashboardEvent" className="manka">Events</Link>
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faFolder} className={`nav-icon ${activeTab === "Categories" ? "bg-active" : ""}`} />
              <button onClick={() => handleTabChange("Categories")}>
                <Link className="manka">Categories</Link>
              </button>
            </li>
            <li>
              <FontAwesomeIcon icon={faBlog} className={`nav-icon ${activeTab === "Blogs" ? "bg-active" : ""}`} />
              <button onClick={() => handleTabChange("Blogs")}>
                <Link className="manka">Blog</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
