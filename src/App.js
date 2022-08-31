import React, { useState } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Preview from './components/Preview';

export default function App() {
  const [formData, setFormData] = useState({
    name: 'Bobby Hill',
    title: 'Prop Comic',
    email: 'BestPropComic@gmail.com',
    phone: '806-994-9866',
    location: 'Arlen, TX',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea ve dolores ratione doloribus alias et corporis optio, nulla deleniti fugit quis molestiae voluptatum magnam veniam quaerat, amet ips',
    school: 'Arlen Community College',
    degree: 'Clowning',
    schoolStartDate: '2015',
    schoolEndDate: '2017',
    company: 'Self-employed',
    position: 'Prop Comic',
    jobTasks:
      'Lorem ipsum dolor sit amet consectetur, quo impedit quas molestias modi est, minus eligendi est beatae quibusdam officia corporis.',
    jobStartDate: '2015',
    jobEndDate: 'Present',
  });
  const [savedFormData, setSavedFormData] = useState({
    name: 'Bobby Hill',
    title: 'Prop Comic',
    email: 'BestPropComic@gmail.com',
    phone: '806-994-9866',
    location: 'Arlen, TX',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ea ve dolores ratione doloribus alias et corporis optio, nulla deleniti fugit quis molestiae voluptatum magnam veniam quaerat, amet ips',
    school: 'Arlen Community College',
    degree: 'Clowning',
    schoolStartDate: '2015',
    schoolEndDate: '2017',
    company: 'Self-employed',
    position: 'Prop Comic',
    jobTasks:
      'Lorem ipsum dolor sit amet consectetur, quo impedit quas molestias modi est, minus eligendi est beatae quibusdam officia corporis.',
    jobStartDate: '2015',
    jobEndDate: 'Present',
  });

  const handleChange = (e) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSavedFormData({
      ...formData,
    });
    setFormData({
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      description: '',
      school: '',
      degree: '',
      schoolStartDate: '',
      schoolEndDate: '',
      company: '',
      position: '',
      jobTasks: '',
      jobStartDate: '',
      jobEndDate: '',
    });
  };

  const edit = () => {
    setFormData({
      ...savedFormData,
    });
  };

  const {
    name,
    title,
    email,
    phone,
    location,
    description,
    school,
    degree,
    schoolStartDate,
    schoolEndDate,
    company,
    position,
    jobTasks,
    jobStartDate,
    jobEndDate,
  } = formData;

  return (
    <div className="main">
      <div className="formContainer">
        <General
          name={name}
          title={title}
          location={location}
          email={email}
          phone={phone}
          description={description}
          handleChange={handleChange}
        />
        <Work
          company={company}
          position={position}
          jobTasks={jobTasks}
          jobStartDate={jobStartDate}
          jobEndDate={jobEndDate}
          handleChange={handleChange}
        />
        <Education
          school={school}
          degree={degree}
          schoolStartDate={schoolStartDate}
          schoolEndDate={schoolEndDate}
          handleChange={handleChange}
          onSubmit={onSubmit}
          edit={edit}
        />
      </div>
      <Preview
        name={savedFormData.name}
        title={savedFormData.title}
        email={savedFormData.email}
        phone={savedFormData.phone}
        location={savedFormData.location}
        description={savedFormData.description}
        school={savedFormData.school}
        degree={savedFormData.degree}
        schoolStartDate={savedFormData.schoolStartDate}
        schoolEndDate={savedFormData.schoolEndDate}
        company={savedFormData.company}
        position={savedFormData.position}
        jobTasks={savedFormData.jobTasks}
        jobStartDate={savedFormData.jobStartDate}
        jobEndDate={savedFormData.jobEndDate}
      />
    </div>
  );
}

// const addWorkForms = () => {
//   const num = this.state.workFormsShown;
//   let forms = [];
//   for (let i = 1; i <= num; i++) {
//     this.setState((prevData) => ({
//       formData: {
//         ...prevData.formData,
//         [`company${i}`]: '',
//       },
//     }));
//     forms.concat(<Work company={this.state.formData.company + i} />);
//   }
//   return forms;
// };
