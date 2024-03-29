import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    //stop form from submittinbg
    event.preventDefault();

    //get text from input
    //console.log(this.myInput.value.value);
    const storeName = this.myInput.current.value;
    //change page from store to what entered
    this.props.history.push(`./store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <p>Fish!!</p>
        <form className='store-selector' onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>

          <input
            type='text'
            ref={this.myInput}
            required
            placeholder='Store Name'
            defaultValue={getFunName()}
          />
          <button type='submit'>Visit Store </button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
