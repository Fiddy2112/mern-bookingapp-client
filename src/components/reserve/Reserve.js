import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Reserve.scss";

function Reserve({ setOpen, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [rooms, setRooms] = useState([]);
  console.log("rooms", rooms);

  useEffect(() => {
    const getHotelRooms = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/hotels/room/${hotelId}`
        );
        setRooms(res.data);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    getHotelRooms();
  }, []);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <i
          className="fa fa-times-circle close"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        ></i>
        <span>Select your rooms:</span>
        {rooms.map((item) => (
          <div className="reserveItem" key={item._id}>
            <div className="reserveInfo">
              <div className="reserveTitle">{item.title}</div>
              <div className="reserveDesc">{item.description}</div>
              <div className="reserveMaxPeople">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="reservePrice">${item.price}</div>
            </div>
            <div className="reserveSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room" key={roomNumber._id}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="reserveButton">Reserve Now!</button>
      </div>
    </div>
  );
}

export default Reserve;
