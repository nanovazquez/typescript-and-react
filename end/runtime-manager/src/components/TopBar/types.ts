import { IUser } from "../types";

export interface IProps {
  /** The name of the active product */
  productName?: string;
  /** The user logged in */
  user?: IUser;
}
