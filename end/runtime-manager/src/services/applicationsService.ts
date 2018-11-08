import result from "./dummy-apps.json";
import { IApplication } from "../components/types.js";

/**
 * Returns the list of applications.
 */
function getApplications(): Promise<IApplication[]> {
  // const toReturn = result.data.map(item => ({
  //   id: item.id,
  //   name: item.id,
  //   target: item.target.type,
  //   status: item.lastReportedStatus
  // }));
  // return Promise.resolve(toReturn);

  return fetch("http://5be46b0095e4340013f88f7a.mockapi.io/api/applications")
    .then(result => result.json())
    .then(result => {
      return result.data.map((item: any) => ({
        id: item.id,
        name: item.id,
        target: item.target.type,
        status: item.lastReportedStatus
      }));
    });
}

export default { getApplications };
