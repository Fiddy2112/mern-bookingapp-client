import React from "react";
import useFetch from "../../hooks/useFetch";
import "./Featured.scss";

function Featured() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotels/countByCity?cities=korean,japan,vietnam"
  );

  const { listCity } = data;

  console.log(data);
  console.log(listCity);

  return (
    <div className="featured">
      {loading ? (
        "Please wait..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Korean</h1>
              <h2>{data?.listCity} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="propertiesImg"
            />
            <div className="featuredTitles">
              <h1>Japan</h1>
              <h2>{data?.listCity} Properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              className="featuredImg"
              src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJvcGVydGllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="propertiesImg"
            />
            <div className="featuredTitles">
              <h1>Vietnam</h1>
              <h2>{data?.listCity} Properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Featured;
