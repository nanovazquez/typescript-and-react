import React from "react";
import { IProps } from "./types";
import styles from "./styles.module.css";

export default class Status extends React.Component<IProps> {
  render() {
    const { type } = this.props;
    return <div className={styles.status}>{type}</div>;
  }
}
