import React, { Component } from "react";
import { Link } from "react-router-dom";
import hackernews from "api/hackernews";

import styles from "./Story.module.scss";

class Story extends Component {
  _isMounted = false;

  state = { storyId: "", story: null };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.storyId !== prevState.storyId) {
      return { storyId: nextProps.storyId };
    }

    return null;
  }

  componentDidMount() {
    this._isMounted = true;
    const story = this.fetchStory(this.state.storyId);

    if (this.state.storyId !== "") {
      this.setState({ story });
    }
  }

  fetchStory = async id => {
    const response = await hackernews.get(`/item/${id}.json`);

    if (this._isMounted) {
      this.setState({ story: response.data });
    }
  };

  componentDidUpdate(prevProps) {
    if (prevProps.storyId !== this.props.storyId) {
      const story = this.fetchStory(this.state.storyId);
      this.setState({ story });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  renderStory() {
    const { story } = this.state;
    if (story) {
      return (
        <>
          <button className={styles.upvote} />
          <a
            href={story.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.storyLink}
          >
            {story.title}
          </a>
          <p className={styles.storyInfo}>
            <span>{story.score} points | </span>
            <span>
              by <Link to={`/user/${story.by}`}>{story.by}</Link> |{" "}
            </span>
            <span>1 day ago | </span>
            <a href="/">{story.kids ? story.kids.length : "0"} comments</a>
          </p>
        </>
      );
    }
  }

  render() {
    return <li className={styles.story}>{this.renderStory()}</li>;
  }
}

export default Story;
