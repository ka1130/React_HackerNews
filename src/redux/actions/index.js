import hackernews from "api/hackernews";
import * as types from "redux/actions/types";

export const fetchStories = () => async dispatch => {
  const response = await hackernews.get("topstories.json");
  dispatch({ type: types.FETCH_TOPSTORIES, payload: response.data });
};

export const fetchStory = storyId => async dispatch => {
  const response = await hackernews.get(`/item/${storyId}.json`);
  dispatch({ type: types.FETCH_SINGLE_STORY, payload: response.data });
};
