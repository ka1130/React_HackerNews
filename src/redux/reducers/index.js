import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  foo: () => {
    return "";
  }
});

export default rootReducer;
