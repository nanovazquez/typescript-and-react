import React, { Component } from "react";
import { Status } from "./components";
import styles from "./App.module.css";

console.log("hi", styles);

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Status type="UNDEPLOYED" />
      </div>
    );
  }
}

export default App;
