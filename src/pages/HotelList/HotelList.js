import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./HotelList.scss";
import SearchItem from "../../components/searchItem/SearchItem";
import Footer from "../../components/footer/Footer";
import { useProvider } from "../../context/StateProvider";
import { getAllHotelByCity } from "../../api";
import axios from "axios";
import { actionType } from "../../context/reducer";

function HotelList() {
  const [allHotelCity, setAllHotelCity] = useState([]);

  //location
  const location = useLocation();
  console.log("location", location);

  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const [openDate, setOpenDate] = useState(false);

  useEffect(() => {
    const getAllHotelCity = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/hotels/getAllHotel?city=${destination}&min=${
            min || 0
          }&max=${max || 999}`
        );

        // dispatch({
        //   type: actionType.SET_ALL_HOTEL_BY_CITY,
        //   allHotelByCity: res.data.hotels,
        // });

        setAllHotelCity(res.data.hotels);
      } catch (err) {
        console.log(err);
      }
    };

    getAllHotelCity();
  }, [destination, max, min]);

  console.log(allHotelCity);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search Booking</h1>
            <div className="listItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder="destinations"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span
                className="listItemDate"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  ranges={dates}
                  className="dates"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label>Option</label>
              <div className="listOption">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min price - <i>per night</i>
                  </span>
                  <input
                    type="number"
                    className="listOptionInput"
                    onChange={(e) => setMin(e.target.value)}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max price - <i>per night</i>
                  </span>
                  <input
                    type="number"
                    className="listOptionInput"
                    onChange={(e) => setMax(e.target.value)}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    min={1}
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adult}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Children</span>
                  <input
                    id="children"
                    min={0}
                    type="number"
                    className="listOptionInput"
                    placeholder={options.children}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    id="room"
                    min={1}
                    type="number"
                    className="listOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            {/* <button onClick={handleClick}>Search</button> */}
          </div>
          <div className="listResult">
            <>
              {allHotelCity.map((item) => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HotelList;
