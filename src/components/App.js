import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    //take a copy of existing state, never mutate original state
    const fishes = { ...this.state.fishes };
    //add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;

    //set new fishes objecxt to state
    this.setState({
      fishes,
    });
  };
  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood ' />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
