import React from 'react';

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart(e) {
    this.props.onAddToCart(this.props.product);
  }
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
        <td><button onClick={this.handleAddToCart}>Add to Cart</button></td>
      </tr>
    );
  }
}

export default ProductRow;