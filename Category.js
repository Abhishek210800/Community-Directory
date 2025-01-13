import React from 'react';
import { useDirectory } from '../ContextApi/DirectoryProvider';

function Category() {
  const { directoryData } = useDirectory();
    const categories = directoryData.directoryCategories;
  const headerStyle = {
    color: 'rgb(31, 41, 55)',
    fontWeight: 700,
    fontSize: '19px',
  };

  return (
    
      <div className="col-md-3 mar">
        <div className="fltrlbox">
          <h4 style={headerStyle}>By category:</h4>

          <div className="shrbg">
            <input
              type="text"
              className="snglbox"
              placeholder="Search categories"
            />
            <i className="fa fa-search"></i>
          </div>

          <div className="bxdscrl">
            {categories.map((category, index) => (
              <label className="contnr" key={index}>
                {category.catName}
                <input type="checkbox" />
                <span className="checkmk"></span>
                <strong className="postl">({category.count})</strong>
              </label>
            ))}
          </div>

          <span className="smlhdr">Showing 65 Group Members</span>
        </div>
      </div>
  );
}

export default Category;
