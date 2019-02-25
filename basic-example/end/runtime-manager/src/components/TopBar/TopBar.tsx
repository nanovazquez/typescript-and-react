import React from "react";
import styles from "./styles.module.css";
import { IProps } from "./types";

export default class TopBar extends React.PureComponent<IProps> {
  static defaultProps = {
    productName: "Anypoint Platform"
  };

  render() {
    const { productName, user } = this.props;
    this.props.user
    
    return (
      <div className={styles.topBar}>
        <div className={styles.hamburger} />
        <div className={styles.product}>{productName}</div>
        <div className={styles.settings}>
          <span className={styles.help}>?</span>
          {user && <span className={styles.userInitials}>{user.initials}</span>}
        </div>
      </div>
    );
  }
}
