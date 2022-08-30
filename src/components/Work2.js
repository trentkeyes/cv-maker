import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    const {
      handleChange,
      onSubmit,
      company,
      position,
      jobTasks,
      jobStartDate,
      jobEndDate,
    } = this.props;
    return (
      <div className="inputSection">
        <form onSubmit={onSubmit}>
          <h3>Work Experience</h3>
          <label htmlFor="companyInput"></label>
          <input
            name="company2"
            type="text"
            value={company}
            onChange={handleChange}
            id="companyInput"
            placeholder="Company"
          />
          <label htmlFor="positionInput"></label>
          <input
            name="position2"
            type="text"
            value={position}
            onChange={handleChange}
            id="positionInput"
            placeholder="Position"
          />
          <label htmlFor="jobStartDateInput"></label>
          <input
            name="jobStartDate2"
            type="text"
            value={jobStartDate}
            onChange={handleChange}
            id="jobStartDateInput"
            placeholder="Start Date"
          />
          <label htmlFor="jobEndDateInput"></label>
          <input
            name="jobEndDate2"
            type="text"
            value={jobEndDate}
            onChange={handleChange}
            id="jobEndDateInput"
            placeholder="End Date"
          />
          <label htmlFor="jobTasksInput"></label>
          <input
            name="jobTasks2"
            type="text"
            value={jobTasks}
            onChange={handleChange}
            id="jobTasksInput"
            placeholder="Description"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
