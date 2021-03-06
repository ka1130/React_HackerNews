import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import hackernews from "api/hackernews";

import styles from "./Story.module.scss";

const Story = props => {
  const [storyId] = useState(props.storyId);
  const [story, setStory] = useState(null);

  const fetchStory = async id => {
    const response = await hackernews.get(`/item/${id}.json`);
    setStory(response.data);
  };

  useEffect(() => {
    fetchStory(storyId);
  }, []);

  if (story) {
    return (
      <li className={styles.story}>
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
          <span>{moment.unix(story.time).fromNow()}</span>
          <a href="/"> {story.kids ? story.kids.length : "0"} comments</a>
        </p>
      </li>
    );
  }

  return null;
};

export default Story;
