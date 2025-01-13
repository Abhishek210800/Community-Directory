import React from "react";
import Category from "./Category";
import CompanyList from "./CompanyList";
function Midmain(props) {
  return (
    <div className="row col-md-12 coverbox search grid-body">
      <div className="row m-3">
        <Category data={props.data} />
        <CompanyList />
      </div>
    </div>
  );
}

export default Midmain;
