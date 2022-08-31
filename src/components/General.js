import React from 'react';

export default function General(props) {
  const {
    name,
    title,
    email,
    phone,
    location,
    description,
    handleChange,
    onSubmit,
  } = props;
  return (
    <div className="inputSection">
      <form onSubmit={onSubmit}>
        <h3>Personal Information</h3>
        <label htmlFor="nameInput"></label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          id="nameInput"
          placeholder="Name"
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
      </form>
    </div>
  );
}
