import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Cart from './Cart';

class FilterableProductTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { filterText: '', inStockOnly: false, cart: [] };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  
  handleAddToCart(product) {
    this.setState({
      cart: this.state.cart.concat(product)
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onAddToCart={this.handleAddToCart}
        />
        <Cart
          cartItems={this.state.cart}
        />
      </div>
    );
  }
}

export default FilterableProductTable;