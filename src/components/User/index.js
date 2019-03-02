import React from "react";

import styles from "./User.module.scss";

const User = () => {
  return (
    <section className={styles.userWrapper}>
      <p>
        <span>user: </span>
        <span>whoishiring</span>
      </p>
      <p>
        <span>created: </span>
        <span>October 20, 2010</span>
      </p>
      <p>
        <span>karma: </span>
        <span>29979</span>/span>
      </p>
      <p>
        <span>about: </span>
        <span>
          This account automatically submits a 'Who is Hiring?' post at 11 AM
          Eastern time on the first weekday of every month.
        </span>
      </p>
    </section>
  );
};

export default User;
