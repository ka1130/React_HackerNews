import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStories } from "redux/actions";

class News extends Component {
  componentDidMount() {
    this.props.fetchStories();
  }

  render() {
    return <div>News</div>;
  }
}

export default connect(
  null,
  { fetchStories }
)(News);
