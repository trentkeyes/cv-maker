import React, { Component } from 'react';

export default class Preview extends Component {
  render() {
    const {
      name,
      email,
      phone,
      location,
      description,
      company,
      jobStartDate,
      jobEndDate,
      jobTasks,
      position,
      school,
      degree,
      schoolStartDate,
      schoolEndDate,
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
              {location}
            </p>
          </div>
        </header>
        <p>{description}</p>
        <h4>Work Experience</h4>
        <div className="preview--work--job-info">
          <span className="preview--work--job-title">{position}</span>
          <div className="preview--work--details">
            <span className="preview--work--company">{company} |</span>
            <span className="preview--work--dates">
              {' '}
              {jobStartDate} - {jobEndDate}
            </span>
          </div>
        </div>
        <p>{jobTasks}</p>
        <h4>Education</h4>
        <div className="preview--education--info">
          <span className="preview--education--degree">{degree}</span>
          <div className="preview--education--details">
            <span className="preview--education--school">{school} |</span>
            <span className="preview--education--dates">
              {' '}
              {schoolStartDate} - {schoolEndDate}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
