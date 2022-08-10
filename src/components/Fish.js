import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <li className='menu-fish'>
        <img src={this.props.details.image} alt={this.props.details.name}></img>
        <p>{this.props.details.name}</p>
        <p>{this.props.details.desc}</p>
        <p>{this.props.details.price}</p>
      </li>
    );
  }
}

export default Fish;
