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
        name: '',
        email: '',
        phone: '',
        school: '',
        degree: '',
        schoolDates: '',
        company: '',
        position: '',
        jobTasks: '',
        jobDates: '',
      },
      formData: {
        name: 'Bobby Hill',
        email: 'BestPropComic@gmail.com',
        phone: '806-994-9866',
        school: 'Arlen Community College',
        degree: 'Clowning',
        schoolDates: '',
        company: '',
        position: '',
        jobTasks: '',
        jobDates: '',
      },
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

  onSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      school,
      degree,
      schoolDates,
      company,
      position,
      jobTasks,
      jobDates,
    } = this.state.tempFormData;

    this.setState({
      formData: {
        name: name,
        email: email,
        phone: phone,
        school: school,
        degree: degree,
        schoolDates: schoolDates,
        company: company,
        position: position,
        jobTasks: jobTasks,
        jobDates: jobDates,
      },
    });
  };

  render() {
    const {
      name,
      email,
      phone,
      school,
      degree,
      schoolDates,
      company,
      position,
      jobTasks,
      jobDates,
    } = this.state.formData;
    const {
      name: tempName,
      email: tempEmail,
      phone: tempPhone,
      school: tempSchool,
      degree: tempDegree,
      schoolDates: tempSchoolDates,
      company: tempCompany,
      position: tempPosition,
      jobTasks: tempJobTasks,
      jobDates: tempJobDates,
    } = this.state.tempFormData;
    return (
      <div className="main">
        <div className="formContainer">
          <General
            name={tempName}
            email={tempEmail}
            phone={tempPhone}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Education
            school={tempSchool}
            degree={tempDegree}
            schoolDates={tempSchoolDates}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
          <Work
            company={tempCompany}
            position={tempPosition}
            jobTasks={tempJobTasks}
            jobDates={tempJobDates}
            handleChange={this.handleChange}
            onSubmit={this.onSubmit}
          />
        </div>
        <Preview
          {...{
            name,
            email,
            phone,
            school,
            degree,
            schoolDates,
            company,
            position,
            jobTasks,
            jobDates,
          }}
        />
      </div>
    );
  }
}
export default App;
