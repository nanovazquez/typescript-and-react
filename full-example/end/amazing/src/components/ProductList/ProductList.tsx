import React from "react";
import { IProps } from "./types";
import styles from "./styles.module.css";

export class ProductList extends React.PureComponent<IProps> {
  static defaultProps = {
    onFetchProducts: () => Promise.resolve([])
  };

  componentDidMount() {
    const { onFetchProducts } = this.props;
    onFetchProducts();
  }

  render() {
    const { products } = this.props;

    return (
      <div className={styles.products}>
        {products.map(item => (
          <div className={styles.product} key={item.id}>
            <img
              className={styles.image}
              alt={item.title}
              src={item.thumbnailUrl}
            />
            <span className={styles.title}>{item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}
