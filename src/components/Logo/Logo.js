import React from "react";
import styles from "./Logo.module.css";
import bookLogo from "../../assets/images/book-logo.png";

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
      <img src={bookLogo} alt="Book" />
    </div>
);

export default logo;