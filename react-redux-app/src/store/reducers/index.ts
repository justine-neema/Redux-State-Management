import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { counterReducer } from "./counterReducer";

export const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
