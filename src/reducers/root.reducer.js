import { combineReducers } from "redux";
import { sharedReducer } from './all.reducer'

const rootReducer = combineReducers({
    sharedReducer,
  }
);

export default rootReducer;
