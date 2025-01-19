import React, { useState, useEffect } from "react";
import CompanyList from "./CompanyList";
import { useDirectory } from "../ContextApi/DirectoryProvider";

function Category(props) {
  const { directoryData } = useDirectory();
  const categories = directoryData.directoryCategories;

  const [searchCompany, setSearchCompany] = useState("");
  const [catFilter, setCatFilter] = useState([]);
  const [copyData, setCopy] = useState(directoryData.directoryCompanies);

  // Filtered category list based on search input
  const filteredItems = searchCompany
    ? categories.filter((category) =>
        category.catName.toLowerCase().includes(searchCompany.toLowerCase())
      )
    : categories;

  const categoryFilter = (category) => {
    setCatFilter((prev) =>
      prev.includes(category)
        ? prev.filter((cats) => cats !== category)
        : [...prev, category]
    );
  };

  // Filtered companies based on category selection
  useEffect(() => {
    if (catFilter.length > 0) {
      const filteredData = directoryData.directoryCompanies.filter((company) =>
        catFilter.some((category) => company.services.includes(category))
      );
      setCopy(filteredData);
    } else {
      setCopy(directoryData.directoryCompanies);
    }
  }, [catFilter, directoryData.directoryCompanies]);

  // Helper to calculate category count
  const getCategoryCount = (category) => {
    return directoryData.directoryCompanies.filter((item) =>
      item.services.includes(category)
    ).length;
  };

  // Inline styles
  const headerStyle = {
    color: "rgb(31, 41, 55)",
    fontWeight: 700,
    fontSize: "19px",
  };

  return (
    <>
      <div className="col-md-3 mar">
        <div className="fltrlbox">
          {/* Header */}
          <h4 style={headerStyle}>By category:</h4>

          {/* Search Box */}
          <div className="shrbg">
            <input
              type="text"
              value={searchCompany}
              onChange={(e) => setSearchCompany(e.target.value)}
              className="snglbox"
              placeholder="Search categories"
            />
            <i className="fa fa-search"></i>
          </div>

          {/* Category List */}
          <div className="bxdscrl">
            {filteredItems.map((category, index) => (
              <label className="contnr" key={index}>
                {category.catName}
                <input
                  type="checkbox"
                  onChange={() => categoryFilter(category.catName)}
                />
                <span className="checkmk"></span>
                <strong className="postl">({getCategoryCount(category.catName)})</strong>
              </label>
            ))}
          </div>

          {/* Footer */}
          <span className="smlhdr">
            Showing {copyData.length} Group Members
          </span>
        </div>
      </div>
      <CompanyList company={props.company} Data={copyData} />
    </>
  );
}

export default Category;
