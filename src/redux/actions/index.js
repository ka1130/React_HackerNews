import hackernews from "api/hackernews";
import * as types from "redux/actions/types";

export const fetchStories = () => async dispatch => {
  const response = await hackernews.get(
    'beststories.json?print=pretty&orderBy="$key"&limitToFirst=30'
  );
  console.log(response.data.length);
  dispatch({ type: types.FETCH_TOPSTORIES, payload: response.data });
};

// https://hacker-news.firebaseio.com/v0/beststories.json?
// print=pretty&orderBy="$key"&limitToFirst=30
