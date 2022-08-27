import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    const { handleChange, onSubmit, school, degree, schoolDates } = this.props;
    return (
      <div className="inputSection">
        <form onSubmit={onSubmit}>
          <label htmlFor="schoolInput">Enter your education</label>
          <input
            name="school"
            type="text"
            value={school}
            onChange={handleChange}
            id="schoolInput"
          />
          <label htmlFor="degreeInput">degree</label>
          <input
            name="degree"
            type="degree"
            value={degree}
            onChange={handleChange}
            id="degreeInput"
          />
          <label htmlFor="schoolDatesInput">School Dates</label>
          <input
            name="schoolDates"
            type="schoolDates"
            value={schoolDates}
            onChange={handleChange}
            id="schoolDatesInput"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
