import React, { useState } from "react";
import { compareAsc, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.css";

function Header() {
  const [openDate, setOpenDate] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <span>icons</span>
          </div>
          <div className="headerListItem ">
            <span>icons</span>
          </div>
          <div className="headerListItem ">
            <span>icons</span>
          </div>
          <div className="headerListItem ">
            <span>icons</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free booking app account
        </p>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <i className="fa fa-bed headerIcon"></i>
            <input
              type="text"
              placeholder="Where are you going ?"
              className="headerSearchInput"
            />
          </div>
          <div className="headerSearchItem">
            <i className="fa fa-calendar headerIcon" aria-hidden="true"></i>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="headerSearchText"
            >
              {format(new Date(2014, 1, 11), "yyyy-MM-dd")}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                className="date"
                minDate={new Date()}
              />
            )}
          </div>
          <div className="headerSearchItem">
            {/* icon */}
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
