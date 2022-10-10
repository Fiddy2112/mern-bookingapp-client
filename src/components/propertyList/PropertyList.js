import React, { useEffect } from "react";
import { propertyListCity } from "../../api";
import { actionType } from "../../context/reducer";
import { useProvider } from "../../context/StateProvider";

import "./PropertyList.scss";

function PropertyList() {
  const images = [
    "https://images.unsplash.com/photo-1662838882978-0cdbc7a7135d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGUlMjBsdWpvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ];

  const [initialState, dispatch] = useProvider();
  const { propertyList } = initialState;
  // console.log(propertyList);
  useEffect(() => {
    propertyListCity().then((data) => {
      dispatch({
        type: actionType.SET_PROPERTY_LIST,
        propertyList: data.data,
      });
    });
  }, []);
  return (
    <div className="propertyList">
      <>
        {propertyList &&
          images.map((img, index) => (
            <div className="propertyItem" key={index}>
              <img className="propertyImg" src={img} alt="propertyImg" />
              <div className="propertyTitles">
                <h1>{propertyList[index]?.type}</h1>
                <h2>
                  {propertyList[index]?.count} {propertyList[index]?.type}
                </h2>
              </div>
            </div>
          ))}
      </>
    </div>
  );
}

export default PropertyList;
