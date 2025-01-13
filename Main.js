import React, { useState } from "react";

function Main() {
  const [member, setMember] = useState("");
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mnhdr">
            <h1>Explore Ebn Directory</h1>
            <h2>
              Details of all the products and services offered by group members
            </h2>

            <div className="serchdsgn">
              <input
                type="text"
                className="form-control"
                value={member}
                onChange={(e) => {
                  setMember(e.target.value);
                }}
                placeholder="Search for group member"
              />

              <button type="button">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
