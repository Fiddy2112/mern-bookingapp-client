import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Hotel.scss";

function Hotel() {
  const [openSlide, setOpenSlide] = useState(false);
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {openSlide && (
          <div className="hotelSlider">
            <i class="fa fa-times-circle close" aria-hidden="true"></i>
            <i class="fa fa-arrow-left arrow" aria-hidden="true"></i>
            <i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now Today!</button>
          <h1 className="hotelTitle">HaNoi Hotel</h1>
          <div className="hotelAddress">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span>123/34a Nga tu So</span>
          </div>
          <span className="hotelDistance">50m from center</span>
          <span className="hotelPreferentialPrice">
            Book now today for <u style={{ color: "#ff4757" }}>10%</u> off and
            get a free airport taxi
          </span>
          <div className="hotelImages">
            <div className="hotelImagesWrapper">
              <img
                className="hotelImg"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="HotelImg"
              />
            </div>

            <div className="hotelImagesWrapper">
              <img
                className="hotelImg"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="HotelImg"
              />
            </div>

            <div className="hotelImagesWrapper">
              <img
                className="hotelImg"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="HotelImg"
              />
            </div>

            <div className="hotelImagesWrapper">
              <img
                className="hotelImg"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="HotelImg"
              />
            </div>

            <div className="hotelImagesWrapper">
              <img
                className="hotelImg"
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="HotelImg"
              />
            </div>

            <div className="hotelImagesWrapper">
              <img
                className="hotelImg"
                src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="HotelImg"
              />
            </div>
          </div>
          <div className="hotelDetail">
            <div className="hotelDetailText">
              <h1 className="hotelTitle">Hotel title</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="hotelDetailPrice">
              <h1>Perfect for a day and night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$344</b>-2 nights
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Hotel;
