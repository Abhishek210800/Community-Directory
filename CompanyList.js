import React from "react";
import panalink from "./images/panalink.jpg";
import toeckinf from "./images/toeckinf.jpg";
import sunvera from "./images/sunvera.jpg";
import actiknow from "./images/actiknow.jpg";
import woodland from "./images/woodland.jpg";
import jubilant from "./images/jubilant.jpg";
import ct from "./images/ct.jpg";
import abaviation from "./images/abaviation.jpg";
import { useDirectory } from '../ContextApi/DirectoryProvider';

function CompanyList() {
  const { directoryData } = useDirectory();
  const containerStyle = {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "20px",
  };

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
        {[
          {
            img: panalink,
            name: "Panalink Infotech Limited",
            desc: "Panalink Infotech Limited is a disruptive mobile and web app development company.",
            tags: ["Website", "Ecommerce", "Mobile app"],
          },
          {
            img: toeckinf,
            name: "Teckinfo Solutions Pvt. Ltd.",
            desc: "Teckinfo has been a leading solution provider in voice, messaging, and communication solutions.",
            tags: ["Call Center Software", "Omnichannel Contact Center"],
            new: true,
          },
          {
            img: sunvera,
            name: "Sunvera Software",
            desc: "SunVera Software creates unique digital experiences for individuals, start-ups, small businesses customers.",
            tags: ["Website", "Software", "Mobile app"],
          },
          {
            img: actiknow,
            name: "Actiknow",
            desc: "A prominent dropshipping company, managing inventory and online stores for over 500 clients.",
            tags: ["BI Services", "Product Engineering", "Startups"],
          },
          {
            img: woodland,
            name: "Woodland",
            desc: "Woodland’s parent company, Aero Group, has been a well known name in the outdoor shoe industry.",
            tags: ["Shoes", "Jackets", "Belts"],
          },
          {
            img: jubilant,
            name: "Jubliant Industries Ltd.",
            desc: "Jubilant is the flagship Company of Agri and Performance Polymers business of the Jubilant Bhartia group.",
            tags: ["Crop Nutrition", "Crop Growth Regulator"],
          },
          {
            img: ct,
            name: "Creative Travel",
            desc: "Many years ago, as we grew as a company, we came to a realisation that our love lay not in booking hotels or tours.",
            tags: ["India", "Nepal", "Bhutan"],
          },
          {
            img: abaviation,
            name: "A&B Aviations",
            desc: "A&B Aviation ME LLC is committed to providing our customers with most cost effective.",
            tags: ["Air Cargo Charters", "PAX / MEDEVAC Charters"],
          },
        ]
        .map((company, index) => (
          <div className="col-md-6" key={index}>
            <a href=" ">
              <div className="bxdlftbg">
                <img src={company.img} alt={company.name} />
                <h4>{company.name}</h4>
                <p>{company.desc}</p>
                <ul className="rolnum">
                  {company.tags.map((tag, i) => (
                    <li key={i}>{tag}</li>
                  ))}
                </ul>
                <span className="lkeicn">
                  <i className="fa fa-thumbs-o-up"></i> 2
                </span>
                {company.new && <div className="newpstn">NEW</div>}
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center marg-10">
        <a href=" " className="btnstl">
          Load More
        </a>
      </div>
    </div>
  );
}

export default CompanyList;
