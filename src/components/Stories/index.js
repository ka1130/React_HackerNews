import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv4 from "uuid/v4";
import { fetchStories } from "redux/actions";

import Story from "components/Stories/Story";

class Stories extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return (
      <ol>
        {this.props.stories.slice(1, 10).map(storyId => (
          <Story key={uuidv4()} storyId={storyId} />
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
