import React, { Component } from "react";
import { ProductList } from "./components/ProductList/ProductList";
import { IState } from "./types";
import { IProduct } from "./components/ProductList/types";
import "./App.css";

class App extends Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { products: [] };
  }

  handleFetchProducts = () => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then((result: IProduct[]) =>
        this.setState({ products: result.slice(0, 100) })
      );
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <ProductList
          products={products}
          onFetchProducts={this.handleFetchProducts}
        />
      </div>
    );
  }
}

export default App;
