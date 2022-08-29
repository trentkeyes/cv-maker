import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';
import Preview from './components/Preview';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempFormData: {
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
      formData: {
        name: 'Bobby Hill',
        title: 'Prop Comic',
        email: 'BestPropComic@gmail.com',
        phone: '806-994-9866',
        location: 'Arlen, TX',
        description: 'Blah',
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
      showWork1: true,
      showWork2: false,
      showWork3: false,
      showEd1: true,
      showEd2: false,
      showEd3: false,
    };
  }

  handleChange = (e) => {
    this.setState((prevData) => ({
      tempFormData: {
        ...prevData.tempFormData,
        [e.target.name]: e.target.value,
      },
    }));
  };

  //add entry school or work?

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      title,
      email,
      phone,
      location,
      description,
      school,
      degree,
      schoolDates,
      company,
      position,
      jobTasks,
      jobStartDate,
      jobEndDate,
    } = this.state.tempFormData;

    this.setState({
      formData: {
        name: name,
        title: title,
        email: email,
        phone: phone,
        location: location,
        description: description,
        school: school,
        degree: degree,
        schoolDates: schoolDates,
        company: company,
        position: position,
        jobTasks: jobTasks,
        jobStartDate: jobStartDate,
        jobEndDate: jobEndDate,
      },
    });
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
      company,
      position,
      jobTasks,
      jobStartDate,
      jobEndDate,
    } = this.state.formData;
    const {
      name: tempName,
      title: tempTitle,
      email: tempEmail,
      phone: tempPhone,
      location: tempLocation,
      description: tempDescription,
      school: tempSchool,
      degree: tempDegree,
      schoolStartDate: tempSchoolStartDate,
      schoolEndDate: tempSchoolEndDate,
      company: tempCompany,
      position: tempPosition,
      jobTasks: tempJobTasks,
      jobStartDate: tempJobStartDate,
      jobEndDate: tempJobEndDate,
    } = this.state.tempFormData;
    return (
      <div className="main">
        <div className="formContainer">
          <General
            name={tempName}
            title={tempTitle}
            location={tempLocation}
            email={tempEmail}
            phone={tempPhone}
            description={tempDescription}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Work
            company={tempCompany}
            position={tempPosition}
            jobTasks={tempJobTasks}
            jobStartDate={tempJobStartDate}
            jobEndDate={tempJobEndDate}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Education
            school={tempSchool}
            degree={tempDegree}
            schoolStartDate={tempSchoolStartDate}
            schoolEndDate={tempSchoolEndDate}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
        </div>
        <Preview
          {...{
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
          }}
        />
      </div>
    );
  }
}
export default App;
