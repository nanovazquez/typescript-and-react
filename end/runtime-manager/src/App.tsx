import React, { Component } from "react";
import { ApplicationsPage, SidePanel, TopBar } from "./components";
import styles from "./App.module.css";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <TopBar />
        <SidePanel />
        <ApplicationsPage />
      </div>
    );
  }
}

export default App;
