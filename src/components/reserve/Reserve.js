import React, { useState } from "react";
import "./Reserve.scss";

function Reserve({ setOpen, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <i
          className="fa fa-times-circle close"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        ></i>
        <span>Select your rooms:</span>
        <div className="reserveItem">
          <div className="reserveInfo">
            <div className="reserveTitle"></div>
            <div className="reserveDesc"></div>
            <div className="reserveMaxPeople">
              Max people: <b>2</b>
            </div>
            <div className="reservePrice">$50</div>
          </div>
          <div className="reserveSelectRooms">
            <div className="room">
              <label>124</label>
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <button className="reserveButton">Reserve Now!</button>
      </div>
    </div>
  );
}

export default Reserve;
