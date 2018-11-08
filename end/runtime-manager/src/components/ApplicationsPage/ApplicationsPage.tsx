import React from "react";
import { IProps, IState } from "./types";
import styles from "./styles.module.css";

import applicationsService from "../../services/applicationsService";

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class ApplicationsPage extends React.PureComponent<IProps, IState> {
  state = {
    applications: []
  };

  componentDidMount() {
    applicationsService.getApplications().then(applications => {
      this.setState({ applications });
    });
  }

  render() {
    const { applications } = this.state;

    const columns = [
      { Header: "Name", accessor: "name" },
      { Header: "Target", accessor: "target" },
      { Header: "Status", accessor: "status" }
    ];

    return (
      <div className={styles.applicationsPage}>
        <ReactTable data={applications} columns={columns} className={styles.table} />
      </div>
    );
  }
}
