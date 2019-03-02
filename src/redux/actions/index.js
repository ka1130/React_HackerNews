import hackernews from "api/hackernews";
import * as types from "redux/actions/types";

export const fetchStories = () => async dispatch => {
  const response = await hackernews.get("topstories.json");
  console.log(response);
  dispatch({ type: types.FETCH_TOPSTORIES, payload: response.data });
};
