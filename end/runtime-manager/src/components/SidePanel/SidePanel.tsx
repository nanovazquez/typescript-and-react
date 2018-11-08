import React from "react";
import { IProps } from "./types";
import styles from "./styles.module.css";

export default class SidePanel extends React.PureComponent<IProps> {
  static defaultProps = {
    pages: [],
    activePage: undefined
  };

  render() {
    const { pages, activePage } = this.props;

    return (
      <div className={styles.sidePanel}>
        {pages.map(page => (
          <a key={page.url} href={page.url} className={activePage.url === page.url ? styles.activeLink : styles.link}>
            {page.title}
          </a>
        ))}
      </div>
    );
  }
}
