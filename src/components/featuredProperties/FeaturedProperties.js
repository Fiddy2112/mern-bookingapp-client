import React from "react";
import ReactStars from "react-rating-stars-component";
import "./FeaturedProperties.scss";

function FeaturedProperties() {
  return (
    <div className="featuredProperties">
      <div className="featuredPropertiesItem">
        <img
          className="featuredPropertiesImg"
          src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="featuredPropertiesImg"
        />
        <div className="featuredPropertiesTitle">
          <span className="featuredPropertiesName">Thanh Xuan</span>
          <span className="featuredPropertiesCity">Ha loi</span>
          <span className="featuredPropertiesPrice">150$</span>
          <ReactStars
            className="featuredPropertiesRating"
            value={2.5}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </div>

      <div className="featuredPropertiesItem">
        <img
          className="featuredPropertiesImg"
          src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="featuredPropertiesImg"
        />
        <div className="featuredPropertiesTitle">
          <span className="featuredPropertiesName">Thanh Xuan</span>
          <span className="featuredPropertiesCity">Ha loi</span>
          <span className="featuredPropertiesPrice">150$</span>
          <ReactStars
            className="featuredPropertiesRating"
            value={2.5}
            edit={false}
            size={30}
            activeColor="#ffd700"
          />
        </div>
      </div>

      <div className="featuredPropertiesItem">
        <img
          className="featuredPropertiesImg"
          src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="featuredPropertiesImg"
        />
        <div className="featuredPropertiesTitle">
          <span className="featuredPropertiesName">Thanh Xuan</span>
          <span className="featuredPropertiesCity">Ha loi</span>
          <span className="featuredPropertiesPrice">150$</span>
          <ReactStars
            className="featuredPropertiesRating"
            value={2.5}
            edit={false}
            size={30}
            activeColor="#ffd700"
          />
        </div>
      </div>

      <div className="featuredPropertiesItem">
        <img
          className="featuredPropertiesImg"
          src="https://images.unsplash.com/photo-1562790351-d273a961e0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="featuredPropertiesImg"
        />
        <div className="featuredPropertiesTitle">
          <span className="featuredPropertiesName">Thanh Xuan</span>
          <span className="featuredPropertiesCity">Ha loi</span>
          <span className="featuredPropertiesPrice">150$</span>
          <ReactStars
            className="featuredPropertiesRating"
            value={2.5}
            edit={false}
            size={30}
            activeColor="#ffd700"
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProperties;
