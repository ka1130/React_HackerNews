import React, { Component } from "react";
import hackernews from "api/hackernews";

import styles from "./User.module.scss";

class User extends Component {
  state = { user: this.props.match.params.user };

  componentDidMount() {
    this.fetchUser(this.state.user);
  }

  fetchUser = async id => {
    const response = await hackernews.get(`/user/${id}.json`);
    this.setState({ user: response.data });
  };

  render() {
    if (this.state.user) {
      return (
        <section className={styles.userWrapper}>
          <p>
            <span>user: </span>
            <span>{this.props.match.params.id}</span>
          </p>
          <p>
            <span>created: </span>
            <span className={styles.date}>{this.state.user.created}</span>
          </p>
          <p>
            <span>karma: </span>
            <span>{this.state.user.karma}</span>
          </p>
          <p>
            <span>about: </span>
            <span>{this.state.user.about}</span>
          </p>
        </section>
      );
    }

    return null;
  }
}

export default User;
