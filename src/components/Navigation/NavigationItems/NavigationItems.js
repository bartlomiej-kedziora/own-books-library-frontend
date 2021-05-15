import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" active>Home</NavigationItem>
      <NavigationItem link="/">Authors</NavigationItem>
      <NavigationItem link="/">Books</NavigationItem>
      <NavigationItem link="/">Forms</NavigationItem>
      <NavigationItem link="/">Languages</NavigationItem>
      <NavigationItem link="/">Collection</NavigationItem>
      <NavigationItem link="/">API</NavigationItem>
    </ul>
);

export default navigationItems;