import React, { useState } from "react";
import { useDirectory } from "../ContextApi/DirectoryProvider";
import { Link } from "react-router-dom";

function CompanyList({ company , Data }) {
  const { directoryData } = useDirectory();
  const [visibleItems, setVisibleItems] = useState(2);

  // Check if a date is within the last 7 days
  const isWithinLastSevenDays = (date) => {
    const inputDate = new Date(date);
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);
    return inputDate >= sevenDaysAgo && inputDate <= currentDate;
  };

  const result = company
  .map((item1) => {
    const matchingItem = Data.find((item2) => item2.name === item1);
    return matchingItem;
  })
  .filter((item) => item !== undefined); // Exclude undefined values

  

  // Load more items
  const loadMore = () => {
    setVisibleItems((prev) => prev + 2);
  };

  // Get company details based on props
  const filteredCompanies = company.map((name) => {
    return directoryData.directoryCompanies.find((item) => item.name === name);
  });

  // Determine the list of companies to display
  const companiesToDisplay = filteredCompanies.filter(Boolean).length
    ? filteredCompanies.filter(Boolean)
    : directoryData.directoryCompanies;

  return (
    <div className="col-md-9">
      {/* Header Section */}
      <div className="row">
        <div className="col-md-15 text-right">
          <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "10px", marginBottom: "20px" }}>
            <span style={{ color: "rgb(12, 74, 110)", fontSize: "13px", float: "left", margin: "10px 0 6px 0" }}>
              Showing ({companiesToDisplay.length})
            </span>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                style={{ border: "1px solid rgb(209, 213, 219)", fontSize: "14px" }}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Name A-Z
              </button>
              <ul className="dropdown-menu">
                {['Popular', 'A-Z', 'Newest', 'Newest A-Z', 'Newest Z-A'].map((item, idx) => (
                  <li key={idx}>
                    <span className="dropdown-item">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Company List Section */}
      <div className="row rolefull">
        {result.slice(0, visibleItems).map((company, index) => (
          <div className="col-md-6" key={index}>
            <Link to="/Panalink">
              <div className="bxdlftbg">
                <img src={company.companyLogoURL + company.companyLogo} alt={company.name} />
                <h4>{company.name}</h4>
                <p>
                  {company.briefDescription
                    ? company.briefDescription.length > 30
                      ? `${company.briefDescription.substring(0, 30)}...`
                      : company.briefDescription
                    : "Description"}
                </p>
                <ul className="rolnum">
                  {company.services.split(",").map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <span className="lkeicn">
                  <i className="fa fa-thumbs-o-up"></i> 2
                </span>
                {isWithinLastSevenDays(company.created_at.split(" ")[0]) && (
                  <div className="newpstn">NEW</div>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < companiesToDisplay.length && (
        <div className="text-center marg-10">
          <button onClick={loadMore} className="btnstl">
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default CompanyList;
