import React, { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./Header.scss";

function Header({ type }) {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  //option
  const [openOption, setOpenOption] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  //calendar
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //navgate
  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]:
          operation === "increase" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    //{ replace, state }
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <i className="fa fa-bed" aria-hidden="true"></i>
            <span>Resting places</span>
          </div>
          <div className="headerListItem ">
            <i className="fa fa-plane" aria-hidden="true"></i>
            <span>Planes</span>
          </div>
          <div className="headerListItem ">
            <i className="fa fa-subway" aria-hidden="true"></i>
            <span>Subways</span>
          </div>
          <div className="headerListItem ">
            <i className="fa fa-taxi" aria-hidden="true"></i>
            <span>Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of{" "}
              <span style={{ color: "red" }}>10% </span>or more with a free
              booking app account
            </p>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <i className="fa fa-bed headerIcon"></i>
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <i className="fa fa-calendar headerIcon" aria-hidden="true"></i>
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >
                  {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <i className="fa fa-child headerIcon" aria-hidden="true"></i>
                <span
                  className="headerSearchText"
                  onClick={() => setOpenOption(!openOption)}
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOption && (
                  <div className="option">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          className="optionCounterButton"
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "decrease")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "increase")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  <i
                    className="fa fa-search headerBtnIcon"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
