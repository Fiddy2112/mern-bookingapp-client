export const actionType = {
  SET_FEATURED: "SET_FEATURED",
  SET_PROPERTY_LIST: "SET_PROPERTY_LIST",
  SET_FEATURED_PROPERTIES: "SET_FEATURED_PROPERTIES",
  SET_ALL_HOTEL_BY_CITY: "SET_ALL_HOTEL_BY_CITY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_FEATURED:
      return {
        ...state,
        featured: action.featured,
      };

    case actionType.SET_PROPERTY_LIST:
      return {
        ...state,
        propertyList: action.propertyList,
      };

    case actionType.SET_FEATURED_PROPERTIES:
      return {
        ...state,
        featuredHotels: action.featuredHotels,
      };

    case actionType.SET_ALL_HOTEL_BY_CITY:
      return {
        ...state,
        allHotelByCity: action.allHotelByCity,
      };

    default:
      return state;
  }
};
export default reducer;
