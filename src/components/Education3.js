import React, { Component } from 'react';

export default class Education extends Component {
  render() {
    const {
      handleChange,
      onSubmit,
      school,
      degree,
      schoolStartDate,
      schoolEndDate,
    } = this.props;
    return (
      <div className="inputSection">
        <form onSubmit={onSubmit}>
          <h3>Education</h3>
          <label htmlFor="schoolInput"></label>
          <input
            name="school3"
            type="text"
            value={school}
            onChange={handleChange}
            id="schoolInput"
            placeholder="University / Institution"
          />
          <label htmlFor="degreeInput"></label>
          <input
            name="degree3"
            type="text"
            value={degree}
            onChange={handleChange}
            id="degreeInput"
            placeholder="Degree / Program"
          />
          <label htmlFor="schoolStartDateInput"></label>
          <input
            name="schoolStartDate3"
            type="text"
            value={schoolStartDate}
            onChange={handleChange}
            id="schoolStartDateInput"
          />
          <label htmlFor="schoolEndDateInput"></label>
          <input
            name="schoolEndDate3"
            type="text"
            value={schoolEndDate}
            onChange={handleChange}
            id="schoolEndDateInput"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
