import React from "react";
import categorycom from "../css/assets/images/category-com.jpg";
import "../css/dashboard.css";
import DashboardNav from "./DashboardNav";
import Sidebar from "./Sidebar";
import DashboardFooter from "./DashboardFooter";

const Dashboard = () => {
  // const [displayNone, setDisplay]=useState("");

  // const handleDisplay=()=>{
  //   if(displayNone===''){
  //     setDisplay("d-none")
  //   }
  //   else{
  //     setDisplay("");
  //   }
  // }
  
  

  return (
    <>
      <div className="app">
        <Sidebar  />
        <div className="main-content">
        <DashboardNav/>

          <div className="tap-top" style={{ display: "block" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevrons-up"
            >
              <polyline points="17 11 12 6 7 11"></polyline>
              <polyline points="17 18 12 13 7 18"></polyline>
            </svg>
          </div>
          
          <div className="companies-text-header">Companies</div>
          <div className="dashboard-row">
            <div className="companies-card">
              <div className="companies-text">Companies</div>
              <div className="total-companies-text">Total Companies</div>
              <div className="progress-circle-container">
                <svg
                  width="321"
                  height="321"
                  viewBox="0 0 321 321"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="160.5"
                    cy="160.5"
                    r="117.63"
                    stroke="white"
                    strokeWidth="16"
                    fill="transparent"
                  />
                  <circle
                    cx="160.5"
                    cy="160.5"
                    r="117.63"
                    stroke="#5c61f2"
                    strokeWidth="16"
                    strokeDasharray="740"
                    strokeDashoffset="185"
                    strokeLinecap="round"
                    fill="transparent"
                    transform="rotate(-225 160.5 160.5)"
                  />
                  <circle
                    cx="160.5"
                    cy="160.5"
                    r="117.63"
                    stroke="rgba(195, 179, 226, 0.3)"
                    strokeWidth="50"
                    fill="transparent"
                    className="waves"
                  />
                </svg>
                <span className="percentage">75%</span>
              </div>
              <div className="card-footer">
                <div className="footer-item">
                  <h3>
                    <b>259</b>
                  </h3>
                  <p>This Quarter</p>
                </div>
                <div className="footer-item">
                  <h3>
                    <b>526</b>
                  </h3>
                  <p>This Year</p>
                </div>
              </div>
            </div>

            <div className="card events-card">
              <div className="card-header">
                <span>Event</span>
              </div>
              <div className="events-list">
                <h3><b>Events  Details</b></h3>
                <div className="activity-line"></div>
                <div className="event-item">
                  <div className="event-date">
                    <span className="date-dot yellow"></span>
                    20-04-2022 Today
                  </div>
                  <h4>Agriculture</h4>
                  <p>
                    Seminar on sustainable agriculture to discuss high yield
                    farming...
                  </p>
                </div>
                <div className="event-item">
                  <div className="event-date">
                    <span className="date-dot blue"></span>
                    20-04-2022 Today
                    <span className="new-tag">New</span>
                  </div>
                  <h4>Trading</h4>
                  <p>
                    Best Trading Practices where experts interact with each
                    other...
                  </p>
                </div>
                <div className="event-item">
                  <div className="activity-line"></div>
                  {/* <div className="activity-dot-secondary"></div> */}
                  <div className="event-date">
                    <span className="date-dot yellow"></span>
                    20-04-2022 Today
                  </div>
                  <h4>Entertainment</h4>
                  <p>Release of coffee table book.</p>
                </div>
              </div>
            </div>

            <div className="card categories-card">
              <div className="card-header">
                <span>Categories</span>
              </div>
              <div className="categories-illustration">
              <h3><b>Category Details</b></h3>
                <img src={categorycom} alt="Categories illustration" />
              </div>
              <div className="categories-grid">
                <div className="category-item">Computer & IT</div>
                <div className="category-item">Entertainment</div>
                <div className="category-item">Finance</div>
                <div className="category-item">Healthcare</div>
                <div className="category-item">Manufacturing</div>
                <div className="category-item">Marketing</div>
                <div className="category-item">Real Estate</div>
                <div className="category-item">Travel & Hospitality</div>
                <div className="category-item">Technology</div>
                <div className="category-item">Others</div>
              </div>
            </div>
          </div>
          <DashboardFooter />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
