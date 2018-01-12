import React from 'react';

class SimpleTable extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.products.map((value, index) => {
            return <tr key={index}><td>{value.name}</td><td>{value.price}</td></tr>
          })}
        </tbody>
      </table>
    )
  }
}

export default SimpleTable;