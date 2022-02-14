import { combineReducers } from "redux";
import { emailReducer } from "./emailReducer";
import { projectReducer } from "./projectReducer";

export const rootReducer = combineReducers({
  project: projectReducer,
  email: emailReducer,
});
