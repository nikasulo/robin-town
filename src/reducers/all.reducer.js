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

export const productsReducer = (state={}, action) => {
  switch (action.type) {
    case types.RECIEVE_PRODUCTS: {
      const { productType, products } = action;
      const newStateObject = {}
      newStateObject[productType] = products;
      return Object.assign({}, state, newStateObject);
    }

    default: {
      return state;
    }
  }
};