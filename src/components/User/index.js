import React, { Component } from "react";
import { Link } from "react-router-dom";
import hackernews from "api/hackernews";

import styles from "./User.module.scss";

class User extends Component {
  _isMounted = false;

  state = { user: null };

  componentDidMount() {
    this._isMounted = true;
    this.fetchUser(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.fetchUser(this.state.user);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  fetchUser = async id => {
    const response = await hackernews.get(`/user/${id}.json`);
    if (this._isMounted) {
      this.setState({ user: response.data });
    }
  };

  render() {
    console.log(this.state.user);
    if (this.state.user) {
      return (
        <section className={styles.userWrapper}>
          <p>
            <span className={styles.firstCol}>user: </span>
            <span>{this.props.match.params.id}</span>
          </p>
          <p>
            <span className={styles.firstCol}>created: </span>
            <span className={styles.date}>{this.state.user.created}</span>
          </p>
          <p>
            <span className={styles.firstCol}>karma: </span>
            <span>{this.state.user.karma}</span>
          </p>
          <p>
            <span className={styles.firstCol}>about: </span>
            <span>{this.state.user.about}</span>
          </p>
          <div className={styles.links}>
            <Link to="/">submissions</Link>
            <Link to="/">comments</Link>
            <Link to="/">favorites</Link>
          </div>
        </section>
      );
    }

    return null;
  }
}

export default User;
