export interface IProduct {
  id: string;
  title: string;
  thumbnailUrl: string;
}

export interface IProps {
  /** The products to display */
  products: IProduct[];
  /** Action to fetch new products */
  onFetchProducts: () => Promise<void>;
}
