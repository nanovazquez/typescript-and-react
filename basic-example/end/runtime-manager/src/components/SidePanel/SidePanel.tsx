import React from "react";
import { IProps } from "./types";
import { IPage } from "../types";
import styles from "./styles.module.css";

export default class SidePanel extends React.PureComponent<IProps> {
  static defaultProps = {
    pages: []
  };

  getPage = (page: IPage) => {
    const { activePage } = this.props;
    const cssClassNames = activePage.url === page.url ? styles.activeLink : styles.link;
    return (
      <a key={page.url} href={page.url} className={cssClassNames}>
        {page.title}
      </a>
    );
  }

  render() {
    const { pages } = this.props;
    return (
      <div className={styles.sidePanel}>
        {pages.map(this.getPage)}
      </div>
    );
  }
}
