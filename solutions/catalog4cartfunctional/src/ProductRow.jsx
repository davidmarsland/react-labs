import React from 'react';

const ProductRow = ({ product, onAddToCart=f=>f }) => {
  
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}
      </td>
      <td>{product.price}</td>
      <td><button onClick={e => onAddToCart(product)}>Add to Cart</button></td>
    </tr>
  );
}

export default ProductRow;