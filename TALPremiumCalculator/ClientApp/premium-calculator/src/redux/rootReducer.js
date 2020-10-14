import { combineReducers } from "redux";

import occupationListReducer from "./occupationListReducer";
import premiumReducer from "./formSubmissionReducer";

const appReducer = combineReducers({
   occupationListReducer,
   premiumReducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};
export default rootReducer;
