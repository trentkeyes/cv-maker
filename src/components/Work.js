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
          <label htmlFor="companyInput">Enter your company</label>
          <input
            name="company"
            type="text"
            value={company}
            onChange={handleChange}
            id="companyInput"
          />
          <label htmlFor="positionInput">Position</label>
          <input
            name="position"
            type="text"
            value={position}
            onChange={handleChange}
            id="positionInput"
          />
          <label htmlFor="jobTasksInput">Job Tasks</label>
          <input
            name="jobTasks"
            type="text"
            value={jobTasks}
            onChange={handleChange}
            id="jobTasksInput"
          />
          <label htmlFor="jobStartDateInput"></label>
          <input
            name="jobStartDate"
            type="text"
            value={jobStartDate}
            onChange={handleChange}
            id="jobStartDateInput"
            placeholder="Start Date"
          />
          <label htmlFor="jobEndDateInput"></label>
          <input
            name="jobEndDate"
            type="text"
            value={jobEndDate}
            onChange={handleChange}
            id="jobEndDateInput"
            placeholder="End Date"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
