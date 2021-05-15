import React, {Component} from "react";
import Aux from "../Aux/Aux"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import styles from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
        <Aux>
          <Toolbar />
          <main className={styles.content}>
            {this.props.children}
          </main>
        </Aux>
    );
  }
}

export default Layout;