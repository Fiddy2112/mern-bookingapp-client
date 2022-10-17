import { initialState } from "./initialState";

export const actionType = {
  SET_FEATURED: "SET_FEATURED",
  SET_PROPERTY_LIST: "SET_PROPERTY_LIST",
  SET_FEATURED_PROPERTIES: "SET_FEATURED_PROPERTIES",
  SET_ALL_HOTEL_BY_CITY: "SET_ALL_HOTEL_BY_CITY",
  NEW_SEARCH: "NEW_SEARCH",
  RESET_SEARCH: "RESET_SEARCH",
  SET_LOADING: "SET_LOADING",
  SET_LOGIN: "SET_LOGIN",
  SET_LOGIN_FAILURE: "SET_LOGIN_FAILURE",
  SET_LOGOUT: "SET_LOGOUT",
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

    // case actionType.NEW_SEARCH:
    //   return {
    //     ...state,

    //     city: action.city,
    //     dates: action.dates,
    //     options: action.options,
    //   };

    case actionType.NEW_SEARCH:
      return action.payload;

    case actionType.RESET_SEARCH:
      return initialState;

    case actionType.SET_LOADING:
      return {
        user: null,
        loading: true,
        error: null,
      };

    case actionType.SET_LOGIN:
      return {
        loading: false,
        user: action.user,
        error: null,
      };

    case action.SET_LOGIN_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.error,
      };

    case actionType.SET_LOGOUT:
      return {
        user: null,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
export default reducer;
