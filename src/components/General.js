import React, { Component } from 'react';
import '../styles/style.css';

export default class General extends Component {
  render() {
    const { name, title, email, phone, location, description, handleChange } =
      this.props;
    return (
      <div className="inputSection">
        <form onSubmit={this.props.onSubmit}>
          <h3>Personal Information</h3>
          <label htmlFor="nameInput">Enter your name</label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleChange}
            id="nameInput"
          />
          <input
            name="title"
            type="text"
            value={title}
            onChange={handleChange}
            id="titleInput"
            placeholder="Title"
          />
          <label htmlFor="emailInput"></label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            id="emailInput"
            placeholder="Email"
          />
          <label htmlFor="phoneInput"></label>
          <input
            name="phone"
            type="text"
            value={phone}
            onChange={handleChange}
            id="phoneInput"
            placeholder="Phone Number"
          />
          <label htmlFor="locationInput"></label>
          <input
            name="location"
            type="text"
            value={location}
            onChange={handleChange}
            id="locationInput"
            placeholder="Location"
          />
          <label htmlFor="descriptionInput"></label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            id="descriptionInput"
            placeholder="Description"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
