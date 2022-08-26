import React, { Component } from 'react';
import '../styles/style.css';

export default class General extends Component {
  render() {
    const { name, email, phone, handleChange } = this.props;
    return (
      <div className="general">
        <h1>General Info Hello, {name}</h1>
        <h1>Your email is {email}</h1>
        <h1>Your number is {phone}</h1>
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
