import React, { useMemo, useState } from "react";
import { useDirectory } from "../ContextApi/DirectoryProvider";

function Category() {
  const { directoryData } = useDirectory();
  const categories = directoryData.directoryCategories;
  const companyList = useMemo(() => {
    return categories.map((category) => category.catName);
  }, [categories]);

  const [searchCompany, setsearchCompany] = useState("");

  const categoryFilter = (e) => {
    setsearchCompany(e.target.value);
  };

  const filteredItems = companyList.filter((item) =>
    item.toLowerCase().includes(searchCompany.toLowerCase())
  );

  const headerStyle = {
    color: "rgb(31, 41, 55)",
    fontWeight: 700,
    fontSize: "19px",
  };
  const getCategoryCount = (category) => {
    const filterData = directoryData.directoryCompanies.filter((item) => {
      return item.services.includes(category);
    });
    return filterData.length;
  };

  return (
    <div className="col-md-3 mar">
      <div className="fltrlbox">
        <h4 style={headerStyle}>By category:</h4>

        <div className="shrbg">
          <input
            type="text"
            value={searchCompany}
            onChange={categoryFilter}
            className="snglbox"
            placeholder="Search categories"
          />
          <i className="fa fa-search"></i>
        </div>

        <div className="bxdscrl">
          {
            filteredItems.length > 0 ? (
              filteredItems.map((company, index) => (
                <label className="contnr" key={index}>
                  {company}
              <input type="checkbox" />
              <span className="checkmk"></span>
              <strong className="postl">({getCategoryCount(company)})</strong>
            </label>
              ))):
              companyList.map((company, index) => (
                <label className="contnr" key={index}>
                  {company}
                  <input type="checkbox" />
                  <span className="checkmk"></span>
                  <strong className="postl">({getCategoryCount(company)})</strong>
                </label>
              ))
          }
        </div>

        <span className="smlhdr">Showing 65 Group Members</span>
      </div>
    </div>
  );
}

export default Category;
