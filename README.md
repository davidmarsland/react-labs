
#react-labs
### React Dev Labs
### These labs augment the React and Redux course at
<a target="_git_react" href="https://davidmarsland.github.io/react-spike/">https://davidmarsland.github.io/react-spike/</a>

### Lab solutions are available here:
<a target="_git_labs" href="https://github.com/davidmarsland/react-labs/">https://github.com/davidmarsland/react-labs/</a>

---
### Lab: Set Up React Dev Env and Create React App helloworld
* Follow the steps in this tutorial to use Create React App for starter files
* Then create helloworld app
* <a target="_ref" href="https://www.kirupa.com/react/setting_up_react_environment.htm">https://www.kirupa.com/react/setting_up_react_environment.htm</a>

---
### Tutorial Labs: Intro to React
<a target="_ref" href="https://reactjs.org/tutorial/tutorial.html">Facebook React Tutorial</a>

---
### Lab: Simple Table in React
#### Implement a simple table in React
* Generate project 

```
create-react-app simpletable
```
* In src directory, delete App.*
* Start with this data from Thinking In React and declare PRODUCTS in src/index.js

```
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];
```

* In src directory, create file SimpleTable.jsx

```
import React from 'react';

class SimpleTable extends React.Component {
  render() {
    return (
      <table>
        <tbody>
        </tbody>
      </table>
    )
  }
}

export default SimpleTable;
```

* Inside the tbody tags use an array and map() this.props.products to populate the name and price for each product

```
<tr><td>name</td><td>price</td></tr>
```

<br>Similar to this:

```
  <ul>
    {this.props.items.map((value, index) => {
      return <li key={index}>{value}</li>
    })}
  </ul>
```

* Modify index.js to render SimpleTable instead of App and pass in products={PRODUCTS} as a prop.
* Run app in browser

```
npm start
```
---
### Lab: Thinking In React Filterable Product Table
* Read the <a target="_ref" href="https://reactjs.org/docs/thinking-in-react.html">Thinking in React Tutorial</a> up to Step 2
* Modularize the code in 
<a target="_ref" href="https://codepen.io/gaearon/pen/BwWzwm">Step 2: Build A Static Version in React</a>
* Create jsx files for each class and add import and export like this:

```
ProductCategoryRow.jsx

import React from 'react';

class ProductCategoryRow extends React.Component {
...
export default ProductCategoryRow;
```

* Import appropriate dependencies for each file like this:

```
import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends React.Component ...
```

---
### Lab: Add State to Filterable Product Table
* Read all of Step 3:  Identify The Minimal (but complete) Representation Of UI State
* Read Step 4: Identify Where Your State Should Live and modify the code as described to add state
* Complete Step 5: Add Inverse Data Flow
* Optional Challenge: Create a Cart component and add selected products to the cart

```
handleAddToCart(product) {
    this.setState({
      cart: this.state.cart.concat(product)  // returns a new array
    })
  }
```
* Optional Challenge: use your own test data for real shopping! 

---

### Redux Todo Example App from Redux Course 
* <a target="_redux" href="https://github.com/sadams/todo-redux-react-webpack">https://github.com/sadams/todo-redux-react-webpack</a>
* Clone repo, then:

```
npm install
npm run start
```

* Launches on localhost:8080 by default.

---

### Lab: Catalog with React and Redux
* Port your simple catalog in React to use Redux for state management
* Previously, you modularized this code <a target="_ref" href="https://reactjs.org/docs/thinking-in-react.html">Thinking in React Shopping https://reactjs.org/docs/thinking-in-react.html</a>
* Refactor to use Redux 
* Use Todo Redux example for inspiration <a target="_redux" href="https://github.com/sadams/todo-redux-react-webpack">https://github.com/sadams/todo-redux-react-webpack</a>
* See previous page for setup
* Optional challenges: use your own test data for real shopping! 

---
### More React and Redux Learning Resources

* <a target="_ref" href="https://www.fullstackreact.com/30-days-of-react/">FullStack React 30 Days of React and Redux</a>

* <a target="_ref" href="https://www.fullstackreact.com/articles/react-tutorial-cloning-yelp/">React Tutorial: Cloning Yelp</a>

* <a target="_ref" href="http://cabin.getstream.io/">Learn React & Redux With Cabin</a>

* <a target="_ref" href="https://survivejs.com/react/introduction/">Survive JS - Webpack and React Book</a>