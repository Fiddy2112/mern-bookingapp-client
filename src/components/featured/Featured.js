import React, { useEffect } from "react";
import { featuredCity } from "../../api";
import { actionType } from "../../context/reducer";
import { useProvider } from "../../context/StateProvider";

import "./Featured.scss";

function Featured() {
  const [initialState, dispatch] = useProvider();
  const { featured } = initialState;

  // console.log(featured);

  const images = [
    "https://images.unsplash.com/photo-1546574722-8267e1c67c54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGtvcmVhbiUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW4lMjBjaXR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmlldG5hbSUyMGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ];

  const nameCity = ["Korean", "Japan", "VietNam"];

  useEffect(() => {
    if (!featured) {
      featuredCity().then((data) => {
        // console.log(data);
        dispatch({
          type: actionType.SET_FEATURED,
          featured: data.data,
        });
      });
    }
  }, []);
  return (
    <div className="featured">
      <>
        {featured &&
          nameCity &&
          images.map((img, index) => (
            <div className="featuredItem" key={index}>
              <img className="featuredImg" src={img} alt="featuredImg" />
              <div className="featuredTitles">
                <h1>{nameCity[index]}</h1>
                <h2>{featured[index]} Properties</h2>
              </div>
            </div>
          ))}
      </>
    </div>
  );
}

export default Featured;
