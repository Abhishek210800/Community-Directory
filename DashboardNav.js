import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "../css/dashboard.css";
import menu from '../images/menu.png'

function DashboardNav({setDisplay}) {

  const showMenu=()=>{
    if(setDisplay==="d-none")
    {
      setDisplay="";
    }
    else{
      setDisplay="d-none";
    }
  }
  console.log(setDisplay);
   const [showAccountMenu, setShowAccountMenu] = useState(false);
  
    const toggleAccountMenu = () => {
      setShowAccountMenu(!showAccountMenu);
    };
  return (
    <div>
      <div className="navbar">
      <button onClick={showMenu}><img src={menu} className='menu' alt='menu.png'/></button>
          <div className="nav-actions">
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input
                type="text"
                className="search-input"
                placeholder="Search here..."
              />
            </div>
            <div className="user-profile-container">
              <div className="user-profile " onClick={toggleAccountMenu}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              {showAccountMenu && (
                <div className="account-menu">
                  <div className="account-menu-item">Abhishek</div>
                  <div className="account-menu-item">Account</div>
                  <div className="account-menu-item">Settings</div>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default DashboardNav