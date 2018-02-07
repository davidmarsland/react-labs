import React from 'react';

const SearchBar = (
  { filterText, inStockOnly, onFilterTextChange=f=>f, onInStockChange=f=>f }) => (
  <form>
    <input type="text" 
      placeholder="Search..." 
      value={filterText}
      onChange={e => onFilterTextChange(e.target.value)}
    />
    <p>
      <input type="checkbox" 
        checked={inStockOnly}
        onChange={e => onInStockChange(e.target.checked)}
      />
      Only show products in stock
    </p>
  </form>
)
    
// class SearchBar extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
  
//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }
  
//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }
  
//   render() {
//     return (
//       <form>
//         <input type="text" 
//           placeholder="Search..." 
//           value={this.props.filterText}
//           onChange={this.handleFilterTextChange}
//         />
//         <p>
//           <input type="checkbox" 
//             checked={this.props.inStockOnly}
//             onChange={this.handleInStockChange}
//           />
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

export default SearchBar;