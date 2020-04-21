import { combineReducers } from "redux";
import { sharedReducer, productsReducer } from './all.reducer'

const rootReducer = combineReducers({
    sharedReducer,
    productsReducer
  }
);

export default rootReducer;
