import React, { Component } from 'react';

export default class Preview extends Component {
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
      <div className="preview">
        <header className="preview--header">
          <div className="preview--header--name-title">
            <h1>{name}</h1>
            <h3 className="preview--title">Job Title</h3>
          </div>

          <div className="preview--contact">
            <p>
              <span className="material-symbols-outlined">call</span>
              {phone}
            </p>
            <p>
              <span className="material-symbols-outlined">mail</span>
              {email}
            </p>
            <p>
              {' '}
              <span className="material-symbols-outlined">location_on</span>
              Arlen, TX
            </p>
          </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea vel
          dolores ratione doloribus alias et corporis optio, nulla deleniti
          fugit quis molestiae voluptatum magnam veniam quaerat, amet ipsa
          autem.
        </p>
        <h4>Work Experience</h4>
        <div className="preview--work--job-info">
          <span>Job position: {position}</span>
          <div className="preview--work--details">
            <span>Company: {company} |</span>
          <span>Job dates {jobDates}</span>
          </div>
          
        </div>
        <p>Job tasks {jobTasks}</p>
        <p>Job description</p>
        <h4>Education</h4>
        <div className="preview--education--info">
          <span>Degree: {degree}</span>
          <span>University: {school} |</span>
          <span>Education dates: {schoolDates}</span>
        </div>
      </div>
    );
  }
}
