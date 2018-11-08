import React, { Component } from "react";
import { ApplicationsPage, SidePanel, TopBar } from "./components";
import styles from "./App.module.css";

const productName = "Runtime Manager";
const user = { id: "1", name: "Nano Vazquez", initials: "MV" };
const pages = [{ url: "1", title: "Applications" }, { url: "2", title: "Servers" }, { url: "3", title: "Alerts" }];
const activePage = pages[0];

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <TopBar user={user} productName={productName} />
        <SidePanel pages={pages} activePage={activePage} />
        <ApplicationsPage />
      </div>
    );
  }
}

export default App;
