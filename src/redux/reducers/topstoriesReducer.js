import { FETCH_TOPSTORIES } from "redux/actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TOPSTORIES:
      return action.payload;
    default:
      return state;
  }
};
