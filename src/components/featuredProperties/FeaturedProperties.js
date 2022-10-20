import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { actionType } from "../../context/reducer";
import { useProvider } from "../../context/StateProvider";

import "./FeaturedProperties.scss";

function FeaturedProperties() {
  const [initialState, dispatch] = useProvider();
  const { featuredHotels } = initialState;

  const [featuredProperties, setFeaturedProperties] = useState([]);

  // console.log("featuredHotels", featuredHotels);

  useEffect(() => {
    const featuredPropertiesHotels = async () => {
      const res = await axios.get(
        "http://localhost:5000/api/hotels/getAllHotel?featured=true&limit=4"
      );
      dispatch({
        type: actionType.SET_FEATURED_PROPERTIES,
        featuredHotels: res.data.hotels,
      });

      setFeaturedProperties(res.data.hotels);
    };
    featuredPropertiesHotels();
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="featuredProperties">
      <>
        {featuredProperties.map((item) => (
          <div className="featuredPropertiesItem" key={item._id}>
            <img
              className="featuredPropertiesImg"
              src={
                "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" ||
                item?.images
              }
              alt="featuredPropertiesImg"
            />
            <div className="featuredPropertiesTitle">
              <span className="featuredPropertiesName">{item.name}</span>
              <span className="featuredPropertiesCity">{item.city}</span>
              <span className="featuredPropertiesPrice">
                $ {item.cheapestPrice}
                <sup style={{ color: "red", paddingLeft: "3px" }}>10%</sup>
              </span>

              <ReactStars
                className="featuredPropertiesRating"
                value={item.rating}
                edit={false}
                size={24}
                activeColor="#ffd700"
              />
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

export default FeaturedProperties;
