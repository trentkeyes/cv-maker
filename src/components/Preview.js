import React, { Component } from 'react';

export default class Preview extends Component {
  // getting the temp props
  render() {
    const {
      name,
      email,
      phone,
      company,
      jobDates,
      jobTasks,
      position,
      school,
      degree,
      schoolDates,
    } = this.props;
    return (
      <div className="cvPreview">
        <h1>Trent Keyes</h1>
        <p>Your name is {name}</p>
        <p>Your email is {email}</p>
        <p>Your number is {phone}</p>
        <p>University: {school}</p>
        <p>Degree: {degree}</p>
        <p>Education dates: {schoolDates}</p>
        <p>Company: {company}</p>
        <p>Job position: {position}</p>
        <p>Job tasks {jobTasks}</p>
        <p>Job dates {jobDates}</p>
      </div>
    );
  }
}
