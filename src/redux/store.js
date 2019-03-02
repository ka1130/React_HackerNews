import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "redux/reducers";

/*
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "firebase/app";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
};

firebase.initializeApp(firebaseConfig);

// react-redux-firebase options
const config = {
  userProfile: "users", // firebase root where user profiles are stored
  enableLogging: false // enable/disable Firebase's database logging
};

// Add redux Firebase to compose
const createStoreWithFirebase = compose(reactReduxFirebase(firebase, config))(
  createStore
);

// Create store with reducers and initial state
// const store = createStoreWithFirebase(rootReducer, applyMiddleware(thunk));
*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
