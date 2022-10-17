import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Hotel.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Reserve from "../../components/reserve/Reserve";
import { useProvider } from "../../context/StateProvider";

function Hotel() {
  const location = useLocation();
  // console.log(location);
  const id = location.pathname.split("/")[2];
  console.log(id);
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({});
  const [openSlide, setOpenSlide] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  // get day-order, option,user
  const [initialState] = useProvider();
  const { user, dates, options } = initialState;
  console.log("dates", dates);
  console.log("options", options);

  // get milliseconds per day
  // 1 second: 1000
  // 1 hour : 60
  // minute: 60
  // 1 day: 24
  const GET_MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  console.log("GET_MILLISECONDS_PER_DAY", GET_MILLISECONDS_PER_DAY);
  const dayDifference = (endDate, startDate) => {
    const timeDifference = Math.abs(startDate?.getTime() - endDate?.getTime());
    console.log("timeDifference", timeDifference);
    const daysDifference = Math.ceil(timeDifference / GET_MILLISECONDS_PER_DAY);
    console.log("daysDifference", daysDifference);
    return daysDifference;
  };

  const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);
  // console.log(dayDifference(dates[0].endDate, dates[0].startDate));

  useEffect(() => {
    const hotelInformation = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/hotels/getHotel/${id}`
        );
        console.log(res.data);
        setHotel(res.data.hotel);
      } catch (err) {
        console.log(err);
      }
    };
    hotelInformation();
  }, []);

  const handleOpen = () => {
    setOpenSlide(true);
  };

  const handleClick = () => {
    if (user) {
      setOpenModal(true);
    } else {
      navigate("/login");
    }
  };

  const cheapestPriceSale =
    days * hotel.cheapestPrice * options.room -
    (days * hotel.cheapestPrice * options.room * 10) / 100;
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlide && (
          <div className="hotelSlider">
            <i
              className="fa fa-times-circle close"
              aria-hidden="true"
              onClick={() => setOpenSlide(false)}
            ></i>
            <i className="fa fa-arrow-left arrow" aria-hidden="true"></i>
            <div className="sliderWrapper">
              <img src={hotel?.images} alt="" className="sliderImg" />
            </div>
            <i className="fa fa-arrow-right arrow" aria-hidden="true"></i>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now Today!</button>
          <h1 className="hotelTitle">{hotel.name}</h1>
          <div className="hotelAddress">
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <span>{hotel.address}</span>
          </div>
          <span className="hotelDistance">{hotel.distance}m from center</span>
          <span className="hotelPreferentialPrice">
            Book now today for <u style={{ color: "#ff4757" }}>10%</u> off and
            get a free airport taxi
          </span>
          <div className="hotelImages">
            {hotel.images?.map((photo, index) => (
              <div className="hotelImagesWrapper" key={index}>
                <img
                  className="hotelImg"
                  src={
                    photo.src ||
                    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  }
                  alt="HotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetail">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">{hotel.title}</h1>
              <p className="hotelDesc">{hotel.description}</p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a {days} night stay!</h1>
              <span>
                Located in the real heart of {hotel.city}, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>${cheapestPriceSale}</b>
                <sup style={{ color: "red" }}>10%</sup>-{days}
                (nights)
              </h2>
              <button onClick={handleClick}>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} />}
    </div>
  );
}

export default Hotel;
