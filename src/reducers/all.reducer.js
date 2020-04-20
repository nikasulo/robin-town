import { types } from "../actions/components";

export const sharedReducer = (state={}, action) => {
  switch (action.type) {
    case types.SET_CURRENT_LOCATION: {
      return Object.assign({}, state, { currentLocation: action.location });
    }

    default: {
      return state;
    }
  }
};