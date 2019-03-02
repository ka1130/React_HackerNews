import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li className={styles.logo}>
            <a href="/">Hacker News</a>
            {/* change to Link ^ */}
          </li>
          <li>
            <a href="/">new</a>
          </li>
          <li>
            <a href="/">past</a>
          </li>
          <li>
            <a href="/">comments</a>
          </li>
          <li>
            <a href="/">ask</a>
          </li>
          <li>
            <a href="/">show</a>
          </li>
          <li>
            <a href="/">jobs</a>
          </li>
          <li>
            <a href="/">submit</a>
          </li>
          <li>
            <a href="/">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
