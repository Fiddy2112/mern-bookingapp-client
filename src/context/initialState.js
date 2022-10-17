export const initialState = {
  loading: false,
  error: null,
  featured: null,
  propertyList: null,
  featuredHotels: null,
  allHotelByCity: null,
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
  user: JSON.parse(localStorage.getItem("user")),
};
