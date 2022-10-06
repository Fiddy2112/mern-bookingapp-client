import React from "react";
import ReactStars from "react-rating-stars-component";
import useFetch from "../../hooks/useFetch";
import "./FeaturedProperties.scss";

function FeaturedProperties() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/getAllHotel?featured=true&limit=4"
  );
  const { hotels } = data;
  console.log("FeaturedProperties", data.hotels);
  return (
    <div className="featuredProperties">
      {loading ? (
        "Please wait..."
      ) : (
        <>
          {hotels.map((hotel) => (
            <div className="featuredPropertiesItem" key={hotel._id}>
              <img
                className="featuredPropertiesImg"
                src={hotel.images[0]}
                alt="featuredPropertiesImg"
              />
              <div className="featuredPropertiesTitle">
                <span className="featuredPropertiesName">{hotel.name}</span>
                <span className="featuredPropertiesCity">{hotel.city}</span>
                <span className="featuredPropertiesPrice">
                  {hotel.cheapestPrice} $
                </span>
                {hotel?.rating && (
                  <ReactStars
                    className="featuredPropertiesRating"
                    value={hotel?.rating}
                    edit={false}
                    size={24}
                    activeColor="#ffd700"
                  />
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
