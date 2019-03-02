import { FETCH_SINGLE_STORY } from "redux/actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_STORY:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
