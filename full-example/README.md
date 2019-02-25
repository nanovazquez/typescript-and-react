# TypeScript ❤ React - Full Example

## Steps:

### Installation

1. Create application by running the _Create React app_ script:

```
npx create-react-app amazing --typescript
```

1. Test the app by running `npm start`.

### Implement the Product list

Implement the Product List use case by creating:

- A page to display the products
- A Product item component

For this, follow these steps:

1. Create a **components** folder under **src**.

1. Create a folder named **ProductList**.

1. Create a file named **ProductList.tsx** and paste the following code:

   ```js
   import React from "react";

   export class ProductList extends React.PureComponent {
     render() {
       return <div>Hello World!</div>;
     }
   }
   ```

1. Now, update the **App.tsx** to display the `<ProductList />` component and run `npm start` to validate it.

   ```js
   class App extends Component {
     render() {
       return (
         <div className="App">
           <ProductList />
         </div>
       );
     }
   }
   ```

### Define the types and the contract

We are going to configure the `<ProductList />` to receive a set of products to display. For this, we need to define the product type first. For this, we are going to use https://jsonplaceholder.typicode.com/photos

1. Navigate to https://jsonplaceholder.typicode.com/photos and analyze the objects we are going to retrieve. Notice that we need the `id`, a `title` and a `thumbnailUrl` from it.

1. Create **types.ts** file inside the **ProductList** folder and paste the following:

   ```js
   export interface IProduct {
     id: string;
     title: string;
     thumbnailUrl: string;
   }
   ```

1. Then, define the **IProps** interface:

   ```js
   export interface IProps {
     /** The products to display */
     products: IProduct[];
     /** Action to retrieve new products */
     fetchProducts: () => Promise<IProduct[]>;
   }
   ```

1. Now, connect the `<ProductList />` component with these interfaces.

   ```js
   import React from "react";
   import { IProps } from "./types";

   export class ProductList extends React.PureComponent<IProps> {
     ...
   }
   ```

1. And set up the initial values for the props:

   ```js
   export class ProductList extends React.PureComponent<IProps, IState> {
     static defaultProps: Partial<IProps> = {
       fetchProducts: () => Promise.resolve([])
     };

     render() {
       return <div>Hello World!</div>;
     }
   }
   ```

1. Finally, update the `render()` method to display the list of products:

   ```js
   export class ProductList extends React.PureComponent<IProps, IState> {
     ...

     render() {
       const { products } = this.props;

       return (
         <div>
           {products.map(item => (
             <div key={item.id}>
               <span>{item.title}></span>
               <img alt={item.title} src={item.thumbnailUrl} />
             </div>
           ))}
         </div>
       );
     }
   }
   ```

### Implement parent-child communication using this contract

Now we are going to implement the logic to display a list of products and to retrieve them from the API. For this, follow these steps:

1. Open the **ProductList.tsx** file and implement the `componentDidMount()` function with a call to fetch products.

   ```js
   export class ProductList extends React.PureComponent<IProps> {
    ...

     componentDidMount() {
       const { fetchProducts } = this.props;
       fetchProducts();
     }

     ...
   }
   ```

1. Next, we are going to update the parent to take care of displaying the products when the component is ready for them. But first, create a **types.ts** file with the folling:

   ```js
   import { IProduct } from "./components/ProductList/types";

   export interface IState {
     /** The products to display */
     products: IProduct[];
   }
   ```

1. Now, open the **App.tsx** file and define the proper constructor:

   ```js
   class App extends Component<{}, IState> {
     constructor(props: {}) {
       super(props);
       this.state = { products: [] };
     }

     ...
   }
   ```

1. Implement the function that will retrieve the products:

   ```js
   handleFetchProducts = () => {
     return fetch("https://jsonplaceholder.typicode.com/photos")
       .then(response => response.json())
       .then((result: IProduct[]) =>
         this.setState({ products: result.slice(0, 100) })
       );
   };
   ```

1. And now, update the `render()` method to set up the `<ProductList />` component properly.

   ```js
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
   ```

Run the app with `npm start` and voilá! 🎉🎉🎉

## Bonus tracks:

1. Set up the styles for the product component.
1. Implement a Shopping cart component.
