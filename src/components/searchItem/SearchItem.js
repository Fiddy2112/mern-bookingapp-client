import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./SearchItem.scss";

function SearchItem({ item }) {
  return (
    <div className="searchItem">
      <div className="searchImg">
        <img
          src={
            "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cm9vbSUyMGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" ||
            item?.images
          }
          alt="searchImg"
        />
      </div>

      <div className="searchDesc">
        <h1 className="searchTitle">{item.name}</h1>
        <span className="searchDistance">{item.distance}m from center</span>
        <span className="searchTaxi">Free airport taxi</span>
        <span className="searchSubtitle">Apartment with Air conditioning</span>
        <span className="searchFeatures">{item.description}</span>
        <span className="searchCancel">Free cancellation</span>
      </div>
      <div className="searchDetail">
        <div className="searchRating">
          <ReactStars
            className="featuredPropertiesRating"
            value={item.rating}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="searchDetailText">
          <span className="searchPrice">${item.cheapestPrice}/night</span>
          <span className="searchTax">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="searchCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
