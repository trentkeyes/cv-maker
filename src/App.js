import React, { Component } from 'react';
import General from './components/General';
import Education from './components/Education';
import Work from './components/Work';

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
    } = this.state.tempFormData;
    console.log(this.state);
    return (
      <div className="App">
        <General
          name={name}
          email={email}
          phone={phone}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
        />
        <Education
          school={school}
          degree={degree}
          schoolDates={schoolDates}
          handleChange={this.handleChange}
        />
        <Work
          company={company}
          position={position}
          jobTasks={jobTasks}
          jobDates={jobDates}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default App;
