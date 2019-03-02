import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import storiesReducer from "redux/reducers/storiesReducer";
import singleStoryReducer from "redux/reducers/singleStoryReducer";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  stories: storiesReducer,
  singleStory: singleStoryReducer
});

export default rootReducer;
