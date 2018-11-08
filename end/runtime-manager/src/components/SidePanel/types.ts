import { IPage } from "../types";

export interface IProps {
  /** The pages to display */
  pages: IPage[];
  /** The active page */
  activePage: IPage;
}
