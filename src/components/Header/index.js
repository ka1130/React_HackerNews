import React from "react";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
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
            <a href="/">login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
