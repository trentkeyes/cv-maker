import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    const { handleChange, onSubmit, company, position, jobTasks, jobDates } =
      this.props;
    return (
      <div className="inputSection">
        <form onSubmit={onSubmit}>
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
            type="jobTasks"
            value={jobTasks}
            onChange={handleChange}
            id="jobTasksInput"
          />
          <label htmlFor="jobDatesInput">Job Dates</label>
          <input
            name="jobDates"
            type="jobDates"
            value={jobDates}
            onChange={handleChange}
            id="jobDatesInput"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}
