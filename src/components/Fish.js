import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  render() {
    const name = this.props.details.name;
    const { image, desc, price, status } = this.props.details;
    const isAvailable = status === 'available';
    return (
      <li className='menu-fish'>
        <img src={image} alt={name}></img>
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{this.props.details.desc}</p>
        <button disabled={!isAvailable}>
          {isAvailable ? 'Add To Order' : 'Sold Out'}
        </button>
      </li>
    );
  }
}

export default Fish;
