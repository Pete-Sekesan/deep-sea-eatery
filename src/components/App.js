import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import fishes from '../sample-fishes';

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

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes,
    });
  };

  addToOrder = (key) => {
    //taker a copy of state
    const order = { ...this.state.order };
    //add to order or update amount
    order[key] = order[key] + 1 || 1;
    //call setState to update state
    this.setState({ order });
  };

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood' />
          <ul className='fishes'>
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          /*take a copy off all states
          {...this.state}*/
          /* passes state of each individual state item*/
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
