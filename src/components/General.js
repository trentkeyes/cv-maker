import React, { Component } from 'react';
import '../styles/style.css';

export default class General extends Component {
  render() {
    const { name } = this.props.name;

    return (
      <div className="general">
        <h1>General Info Hello, {this.props.name}</h1>
        <form onSubmit={this.props.onSubmitGeneral}>
          <label htmlFor="nameInput">Enter your name</label>
          <input
            type="text"
            value={name}
            onChange={this.props.handleChange}
            id="nameInput"
          />
          <button type="submit">Add name</button>
        </form>
      </div>
    );
  }
}
