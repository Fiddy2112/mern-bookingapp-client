import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Reserve.scss";
import { useProvider } from "../../context/StateProvider";

function Reserve({ setOpen, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [rooms, setRooms] = useState([]);
  console.log("selectedRooms", selectedRooms);
  console.log("rooms", rooms);

  const navigate = useNavigate();

  const [initialState, dispatch] = useProvider();
  const { dates } = initialState;
  console.log("dates", dates);

  const getDatesInSelectedRoom = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());
    console.log("date", date);

    const dates = [];

    if (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return dates;
  };

  const allDates = getDatesInSelectedRoom(
    dates[0]?.startDate,
    dates[0]?.endDate
  );

  useEffect(() => {
    const getHotelRooms = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/hotels/room/${hotelId}`
        );
        setRooms(res.data.listRoom);
      } catch (err) {
        console.log(err);
      }
    };
    getHotelRooms();
  }, [hotelId]);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    console.log("checked", checked);
    console.log("value", value);
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((selectedRoom) => {
          const res = axios.put(
            `http://localhost:5000/api/rooms/selectRoom/${selectedRoom}`,
            { dates: allDates }
          );
          console.log(res.data);
          return res.data;
        })
      );
      // setOpen(false);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="reserve">
      <div className="reserveContainer">
        <i
          className="fa fa-times-circle close"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        ></i>
        {rooms.length > 0 ? (
          <>
            <span>Select your rooms:</span>
            {rooms?.map((item) => (
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
          </>
        ) : (
          <>
            <h1>Update Soon!!!</h1>
            <p style={{ fontSize: "15px", weight: 300 }}>
              We will offer <span style={{ color: "#ff4757" }}>20%</span>{" "}
              discount on this issue!
            </p>
          </>
        )}
        {rooms.length > 0 && (
          <button className="reserveButton" onClick={handleClick}>
            Reserve Now!
          </button>
        )}
      </div>
    </div>
  );
}

export default Reserve;
