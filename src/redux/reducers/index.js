import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import storiesReducer from "redux/reducers/storiesReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  stories: storiesReducer
});

export default rootReducer;
