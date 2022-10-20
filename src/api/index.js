import axios from "axios";

const baseURL = "http://localhost:5000/";

export const featuredCity = async () => {
  try {
    const response = await axios.get(
      `${baseURL}api/hotels/countByCity?cities=korean,japan,vietnam`
    );
    // console.log("featuredCity", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const propertyListCity = async () => {
  try {
    const response = await axios.get(`${baseURL}api/hotels/countByType`);
    // console.log("propertyListCity", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const featuredPropertiesHotel = async () => {
  let featured = true;
  let limit = 4;
  try {
    const response = await axios.get(
      `${baseURL}api/hotels/getAllHotel?featured=${featured}&limit=${limit}`
    );
    // console.log("featuredPropertiesHotel", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAllHotelByCity = async () => {
  try {
    const res = await axios.get(
      `${baseURL}api/hotels/getAllHotel?city=vietnam`
    );
    // console.log("getAllHotelByCity", res.data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
