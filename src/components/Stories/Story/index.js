import React, { Component } from "react";
import hackernews from "api/hackernews";

import styles from "./Story.module.scss";

class Story extends Component {
  state = { storyId: "", story: null };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.storyId !== prevState.storyId) {
      return { storyId: nextProps.storyId };
    }

    return null;
  }

  componentDidMount() {
    if (this.state.storyId !== "") {
      const story = this.fetchStory(this.state.storyId);
      this.setState({ story });
    }
  }

  fetchStory = async id => {
    const response = await hackernews.get(`/item/${id}.json`);
    this.setState({ story: response.data });
    return response.data;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.storyId !== this.props.storyId) {
      const story = this.fetchStory(this.state.storyId);
      this.setState({ story });
    }
  }

  render() {
    console.log(this.state.story);
    return (
      <li className={styles.story}>
        {this.state.story ? this.state.story.title : ""}
      </li>
    );
  }
}

export default Story;
