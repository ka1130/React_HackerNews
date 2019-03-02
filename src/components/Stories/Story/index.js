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

  renderStory() {
    const { story } = this.state;
    if (story) {
      return (
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.storyLink}
        >
          {story.title}
        </a>
      );
    }
  }

  render() {
    console.log(this.state.story);
    return <li className={styles.story}>{this.renderStory()}</li>;
  }
}

export default Story;
