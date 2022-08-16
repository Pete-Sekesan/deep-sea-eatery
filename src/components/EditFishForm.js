import React from 'react';

class EditFishForm extends React.Component {
  handleChange = (event) => {};
  render() {
    return (
      <div className='fish-edit'>
        <input
          type='text'
          name='name'
          onChange={this.handleChange}
          value={this.props.fish.name}
        ></input>
        <input
          type='text'
          name='price'
          onChange={this.handleChange}
          value={this.props.fish.price}
        ></input>
        <select
          type='text'
          name='status'
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value='available'> Fresh!</option>
          <option value='unavailable'> Sold Out!</option>
        </select>
        <textarea
          type='text'
          name='desc'
          onChange={this.handleChange}
          value={this.props.fish.desc}
        ></textarea>
        <input
          type='text'
          name='image'
          onChange={this.handleChange}
          value={this.props.fish.image}
        ></input>
      </div>
    );
  }
}

export default EditFishForm;
