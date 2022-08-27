import React, { Component } from 'react';
import '../styles/style.css';

export default class General extends Component {
  render() {
    const { name, email, phone, handleChange } = this.props;
    return (
      <div className="inputSection">
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="nameInput">Enter your name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            id="nameInput"
          />
          <label htmlFor="emailInput">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            id="emailInput"
          />
          <label htmlFor="phoneInput">Phone Number</label>
          <input
            name="phone"
            type="phone"
            value={phone}
            onChange={handleChange}
            id="phoneInput"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
