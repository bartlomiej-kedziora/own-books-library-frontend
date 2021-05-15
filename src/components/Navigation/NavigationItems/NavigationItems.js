import React from "react";
import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/" exact>Home</NavigationItem>
      <NavigationItem link="/authors">Authors</NavigationItem>
      <NavigationItem link="/books">Books</NavigationItem>
      <NavigationItem link="/forms">Forms</NavigationItem>
      <NavigationItem link="/languages">Languages</NavigationItem>
      <NavigationItem link="/collection">Collection</NavigationItem>
      <NavigationItem link="/api">API</NavigationItem>
    </ul>
);

export default navigationItems;