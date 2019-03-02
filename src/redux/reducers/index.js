import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import topstoriesReducer from "redux/reducers/topstoriesReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  topstories: topstoriesReducer
});

export default rootReducer;
