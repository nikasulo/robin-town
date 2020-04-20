import { types } from "./components"

export const setCurrentLocation = location => ({
  type: types.SET_CURRENT_LOCATION,
  location
});