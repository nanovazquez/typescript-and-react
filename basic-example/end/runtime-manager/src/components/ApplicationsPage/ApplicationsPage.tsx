import React from "react";
import ReactTable from "react-table";
import applicationsService from "../../services/applicationsService";
import { IProps, IState } from "./types";
import "react-table/react-table.css";
import styles from "./styles.module.css";

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
