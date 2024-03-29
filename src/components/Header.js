import React from 'react';

const Header = (props) => {
  return (
    <header className='top'>
      <h1> Deep Sea Eatery</h1>
      <h3 className='tagline'>
        <span>{props.tagline}</span>
      </h3>
    </header>
  );
};

// class Header extends React.Component {
//   render() {
//     return (
//       <header className='top'>
//         <h1> Deep Sea Eatery</h1>
//         <h3 className='tagline'>
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;
