import React from "react";
import useFetch from "../../hooks/useFetch";
import "./PropertyList.scss";

function PropertyList() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/countByType"
  );

  console.log(data.data);

  const images = [
    "https://images.unsplash.com/photo-1662838882978-0cdbc7a7135d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGUlMjBsdWpvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <div className="propertyList">
      {loading ? (
        "Please wait..."
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="propertyItem" key={i}>
                <img className="propertyImg" src={img} alt="propertyImg" />
                <div className="propertyTitles">
                  <h1>{data.data[i]?.type}</h1>
                  <h2>
                    {data.data[i]?.count} {data.data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default PropertyList;
