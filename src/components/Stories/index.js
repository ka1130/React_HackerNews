import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import { fetchStories } from "redux/actions";

import Story from "components/Stories/Story";

import styles from "./Stories.module.scss";

class Stories extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return (
      <ol className={styles.storiesWrapper}>
        {this.props.stories.slice(0, 20).map(storyId => (
          <Story key={uuidv4()} storyId={storyId} />
          // restrict amount of stories and add 'more' button
        ))}
      </ol>
    );
  }
}

const mapStateToProps = state => ({ stories: state.stories });

export default connect(
  mapStateToProps,
  { fetchStories }
)(Stories);
