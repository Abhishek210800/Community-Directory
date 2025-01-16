import React , {useState} from "react";
import { useDirectory } from "../ContextApi/DirectoryProvider";
import { Link } from "react-router-dom";
function CompanyList(props) {
  const { directoryData } = useDirectory();
  function isWithinLastSevenDays(data) {
    const inputDate = new Date(data);
    const currentDate = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(currentDate.getDate() - 7);
    return inputDate >= sevenDaysAgo && inputDate <= currentDate;
  }
  const containerStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "20px",
  };

  const [visibleItems, setVisibleItems] = useState(1);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 2);
  };
 

  const ShowCompany=props.company.map(name => {
    const detail = directoryData.directoryCompanies.find(item => item.name === name);
    return detail ? detail : null; 
  });

  const spanStyle = {
    color: "rgb(12, 74, 110)",
    fontSize: "13px",
    float: "left",
    marginTop: "10px",
    marginLeft: "0px",
    marginBottom: "6px",
  };

  const buttonStyle = {
    border: "1px solid rgb(209, 213, 219)",
    fontSize: "14px",
  };

  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-15 text-right">
          <div style={containerStyle}>
            <span style={spanStyle}>Showing (65)</span>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                style={buttonStyle}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Name A-Z
              </button>
              <ul className="dropdown-menu">
                <li>
                  <span className="dropdown-item">Popular</span>
                </li>
                <li>
                  <span className="dropdown-item">Newest</span>
                </li>
                <li>
                  <span className="dropdown-item">Newest A-Z</span>
                </li>
                <li>
                  <span className="dropdown-item">Newest Z-A</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="row rolefull">

        { ShowCompany !== null ?
        ShowCompany.slice(0, visibleItems).map((company, index) => (
          <div className="col-md-6" key={index}>
            <Link to='/Panalink'>
              <div className="bxdlftbg">
                <img
                  src={company.companyLogoURL + company.companyLogo}
                  alt={company.name}
                />
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
                {isWithinLastSevenDays(company.created_at.split(" ")[0]) ? (
                  <div className="newpstn">NEW</div>
                ) : null}
              </div>
            </Link>
          </div>
        ))
        :directoryData.directoryCompanies.slice(0, visibleItems).map((company, index) => (
          <div className="col-md-6" key={index}>
            <a href=" ">
              <div className="bxdlftbg">
                <img
                  src={company.companyLogoURL + company.companyLogo}
                  alt={company.name}
                />
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
                {isWithinLastSevenDays(company.created_at.split(" ")[0]) ? (
                  <div className="newpstn">NEW</div>
                ) : null}
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center marg-10">
        <button onClick={loadMore} className="btnstl">
          Load More
        </button>
      </div>
    </div>
  );
}

export default CompanyList;
