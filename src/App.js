import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Preview from './components/Preview';
import Education2 from './components/Education2';
import Education3 from './components/Education3';
import Work2 from './components/Work2';
import Work3 from './components/Work3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
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
      },
      savedFormData: {
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
      },
    };
  }

  handleChange = (e) => {
    this.setState((prevData) => ({
      formData: {
        ...prevData.formData,
        [e.target.name]: e.target.value,
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState((prevData) => ({
      formData: {
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
      },
      savedFormData: {
        ...prevData.formData,
      },
    }));
    console.log(this.state);
  };

  render() {
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
      school2,
      degree2,
      schoolStartDate2,
      schoolEndDate2,
      school3,
      degree3,
      schoolStartDate3,
      schoolEndDate3,
      company,
      position,
      jobTasks,
      jobStartDate,
      jobEndDate,
      company2,
      position2,
      jobTasks2,
      jobStartDate2,
      jobEndDate2,
      company3,
      position3,
      jobTasks3,
      jobStartDate3,
      jobEndDate3,
    } = this.state.formData;

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
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Work
            company={company}
            position={position}
            jobTasks={jobTasks}
            jobStartDate={jobStartDate}
            jobEndDate={jobEndDate}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Work2
            company={company2}
            position={position2}
            jobTasks={jobTasks2}
            jobStartDate={jobStartDate2}
            jobEndDate={jobEndDate2}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Work3
            company={company3}
            position={position3}
            jobTasks={jobTasks3}
            jobStartDate={jobStartDate3}
            jobEndDate={jobEndDate3}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Education
            school={school}
            degree={degree}
            schoolStartDate={schoolStartDate}
            schoolEndDate={schoolEndDate}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Education2
            school={school2}
            degree={degree2}
            schoolStartDate={schoolStartDate2}
            schoolEndDate={schoolEndDate2}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Education3
            school={school3}
            degree={degree3}
            schoolStartDate={schoolStartDate3}
            schoolEndDate={schoolEndDate3}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
        </div>
        <Preview
          name={this.state.savedFormData.name}
          title={this.state.savedFormData.title}
          email={this.state.savedFormData.email}
          phone={this.state.savedFormData.phone}
          location={this.state.savedFormData.location}
          description={this.state.savedFormData.description}
          school={this.state.savedFormData.school}
          degree={this.state.savedFormData.degree}
          schoolStartDate={this.state.savedFormData.schoolStartDate}
          schoolEndDate={this.state.savedFormData.schoolEndDate}
          company={this.state.savedFormData.company}
          position={this.state.savedFormData.position}
          jobTasks={this.state.savedFormData.jobTasks}
          jobStartDate={this.state.savedFormData.jobStartDate}
          jobEndDate={this.state.savedFormData.jobEndDate}
          extra={this.state.savedFormData}
        />
      </div>
    );
  }
}
export default App;

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
