import React from 'react';

export default function Preview(props) {
  const {
    name,
    title,
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
  } = props;

  return (
    <div className="preview">
      <header className="preview--header">
        <div className="preview--header--name-title">
          {name && <h1>{name}</h1>}
          {title && <h3 className="preview--title">{title}</h3>}
        </div>

        <div className="preview--contact">
          {phone && (
            <p>
              <span className="material-symbols-outlined">call</span>
              {phone}
            </p>
          )}
          {email && (
            <p>
              <span className="material-symbols-outlined">mail</span>
              {email}
            </p>
          )}
          {location && (
            <p>
              {' '}
              <span className="material-symbols-outlined">location_on</span>
              {location}
            </p>
          )}
        </div>
      </header>
      {description && <p>{description}</p>}
      <h4>Work Experience</h4>
      <div className="preview--work--job-info">
        {position && (
          <span className="preview--work--job-title">{position}</span>
        )}
        {company && jobStartDate && jobEndDate && (
          <div className="preview--work--details">
            <span className="preview--work--company">{company} |</span>
            <span className="preview--work--dates">
              {' '}
              {jobStartDate} - {jobEndDate}
            </span>
          </div>
        )}
      </div>
      <p>{jobTasks}</p>
      <h4>Education</h4>
      <div className="preview--education--info">
        <span className="preview--education--degree">{degree}</span>
        {school && schoolStartDate && schoolEndDate && (
          <div className="preview--education--details">
            <span className="preview--education--school">{school} |</span>
            <span className="preview--education--dates">
              {' '}
              {schoolStartDate} - {schoolEndDate}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
