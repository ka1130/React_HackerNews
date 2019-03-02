import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStory } from "redux/actions";
import hackernews from "api/hackernews";

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
    console.log(response);

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
    console.log(this.state);
    return <div>{this.state.story ? this.state.story.title : ""}</div>;
  }
}

export default connect(
  null,
  { fetchStory }
)(Story);
