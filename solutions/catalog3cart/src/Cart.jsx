import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h3>Cart</h3>
        <table>
          <tbody>
            {this.props.cartItems.map((value, index) => {
              return <tr key={index}><td>{value.name}</td><td>{value.price}</td></tr>
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart;