import React from "react";
import "../css/DashboardEvent.css";
import Sidebar from "./Sidebar";
import DashboardNav from "./DashboardNav";
// import DashboardFooter from "./DashboardFooter";

const DashboardEvent = () => {
  const data = [
    {
      category: "Agriculture",
      event: "Seminar on Sustainable Agriculture",
    },
    {
      category: "Trading",
      event: "Best Trading Practices",
    },
  ];

  return (
    <>
      <div className="app">
        <Sidebar />
        <div className="main-content">
        <DashboardNav />
        <h3 className="mera">Events
        <button className="add-new-btn">+ Add New</button>
        </h3>
        <div>
          <div className="container2">
            
           
            <div className="table-container">
              <div className="table-controls">
                <label>
                  Show{" "}
                  <select>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>{" "}
                  entries
                </label>
                
                <input
                  type="text"
                  
                  placeholder=""
                  className="search-input"
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Event</th>
                    <th>Details</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.category}</td>
                      <td>{item.event}</td>
                      <td></td>
                      <td>
                        <button className="edit-btn">✏️</button>
                        <button className="view-btn">👁️</button>
                        <button className="delete-btn">🗑️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                <button className="prev-btn">Previous</button>
                <button className="page-btn">1</button>
                <button className="next-btn">Next</button>
              </div>
            </div>
          </div>
         </div>        
        {/* <DashboardFooter/> */}
          </div>
        </div>
    </>
  );
};

export default DashboardEvent;
